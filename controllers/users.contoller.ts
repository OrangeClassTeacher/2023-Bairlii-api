import Users from "../models/users.model";
import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const create = async (req: Request, res: Response) => {
    const {
        userName,
        firstName,
        lastName,
        email,
        address,
        password,
        profilePicture,
        phoneNumber,
        ratingAsRenter,
        ratingAsLandlord,
    } = req.body;

    if (!password || !email || !userName) {
        res.status(500).send({
            status: false,
            message: "incomplete information",
        });
        return;
    }

    const hashedPass = await bcrypt.hash(password, 5);

    if (hashedPass) {
        const newUser = new Users({
            email,
            password: hashedPass,
            userName,
            firstName,
            lastName,
            address,
            profilePicture,
            phoneNumber,
            ratingAsRenter,
            ratingAsLandlord,
        });

        const result = await newUser.save();

        if (result) {
            res.status(200).send({
                status: true,
                message: "user registered successfully",
            });
            return;
        } else {
            res.status(500).send({
                status: false,
                message: "Registration failed",
            });
            return;
        }
    } else {
        res.status(500).send({
            status: false,
            messsage: "password didn't encrypted",
        });
    }
};

const userLogin = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(500).send({
            status: false,
            message: "Enter user email and password",
        });
        return;
    }

    const user = await Users.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
        const secretToken: string = process.env.TOKEN_KEY || "";
        const token = jwt.sign({ user: user }, secretToken, {
            expiresIn: "1d",
        });
        res.status(200).send({ status: true, message: "success", token });
        return;
    } else {
        res.status(500).send({ status: false, message: "user not found!!" });
        return;
    }
};

const getAll = async (req: Request, res: Response) => {
    const result = await Users.find({}).limit(10);

    res.json({ status: true, result });
};

const getOne = async (req: Request, res: Response) => {
    const { _id } = req.params;
    try {
        const result = await Users.findById({ _id });
        res.json({ status: true, result });
    } catch (err) {
        res.json({ status: false, err });
    }
};

export { create, getAll, getOne, userLogin };
