import Users from "../models/users.model";
import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const adminLogin = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(500).send({
            status: false,
            message: "Enter user email and password",
        });
        return;
    }

    const admin = await Users.findOne({ email });

    if (admin && (await bcrypt.compare(password, admin.password))) {
        const secretToken: string = process.env.TOKEN_KEY || "";

        const token = jwt.sign({ user: admin }, secretToken, {
            expiresIn: "7d",
        });
        res.status(200).send({ status: true, message: "success", token });
        return;
    } else {
        res.status(500).send({ status: false, message: "user not found!!" });

        return;
    }
};


export{adminLogin};