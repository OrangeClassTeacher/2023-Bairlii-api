import Users from "../models/users.model";
import { Request, Response } from "express";

const create = async (req: Request, res: Response) => {
    try {
        const result = await Users.create(req.body);
        res.json({ status: true, result });
    } catch (err) {
        res.json({ status: false, message: err });
    }
};

const getAll = async (req: Request, res: Response) => {
    const result = await Users.find({}).limit(10);

    res.json({ status: true, result });
};

export { create, getAll };
