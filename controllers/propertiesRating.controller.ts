import { Request, Response } from "express";
import Prorating from "../models/propertiesRating.model";

const create = async (req: Request, res: Response) => {
    try {
        const result = await Prorating.create(req.body);
        res.json({ status: true, result });
    } catch (err) {
        res.json({ status: false, message: err });
    }
};

const getAll = async (req: Request, res: Response) => {
    try {
        const result = await Prorating.find().limit(10);
        res.json({ status: true, result });
    } catch (err) {
        res.json({ status: false, message: err });
    }
};

const getOne = async (req: Request, res: Response) => {
    const { _id } = req.params;
    try {
        const result = await Prorating.find({ _id });
        res.json({ status: true, result });
    } catch (err) {
        res.json({ status: false, err });
    }
};

export { create, getAll, getOne };
