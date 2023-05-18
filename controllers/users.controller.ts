import Users from "../models/users.model";
import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const register = async (req: Request, res: Response) => {
    const {
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

    if (!password || !email) {
        res.status(500).send({
            status: false,
            message: "incomplete information",
        });
        return;
    }

    const hashedPass = await bcrypt.hash(password, 10);

    if (hashedPass) {
        const newUser = new Users({
            email,
            password: hashedPass,
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

const forgotPassword = async (req: Request, res: Response) => {
    const { email } = req.body;

    if (!email) {
        res.status(500).send({
            status: false,
            message: "Enter user email and password",
        });
        return;
    }
    const user = await Users.findOne({ email: email });

    if (user) {
        res.status(200).send({ status: true, message: "success" });
        return;
    } else {
        res.status(500).send({ status: false, message: "user not found!!" });
        return;
    }
};

const resetPassword = async (req: Request, res: Response) => {
    const { password, email } = req.body;
    if (!password) {
        res.status(500).send({
            status: false,
            message: "Password oruulna uu",
        });
        return;
    }
    const user = await Users.findOne({ email: email });

    const hashedPass = await bcrypt.hash(password, 10);

    user.password = hashedPass;
    user?.save();
    if (user) {
        res.status(200).send({ status: true, message: "success" });
        return;
    } else {
        res.status(500).send({ status: false, message: "user not found!!" });
        return;
    }
};

const updateUser = async (req: Request, res: Response) => {
    const { _id } = req.params;

    try {
        const checkId = await Users.findById(_id);
        if (checkId) {
            const result = await Users.findByIdAndUpdate(_id, req.body, {
                new: true,
                runValidators: true,
            });
            res.json({ status: true, result });
        } else {
            res.json({ status: false, message: "User not found" });
        }
    } catch (err) {
        res.json({ status: false, message: err });
    }
};
const deleteUser = async (req: Request, res: Response) => {
    const { _id } = req.params;
    console.log(_id);
    
    if (!_id) {
      res.json({ status: false, message: "id not found" });
      return;
    }
    try {
    await Users.findByIdAndDelete({ _id });
      res.json({ status: true, message: "success" });
    } catch (err) {
      res.json({ status: false, message: err });
    }
  };
const getAll = async (req: Request, res: Response) => {
    try{
        const result = await Users.find({});
        const usersCount = await Users.find().count();
        res.json({ status: true, usersCount, result });
    } catch (err) {
        res.json({ status: false, message: err });
    }
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



export {
    register,
    getAll,
    getOne,
    userLogin,
    updateUser,
    resetPassword,
    forgotPassword,
    deleteUser
};
