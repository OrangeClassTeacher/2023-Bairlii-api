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
        const ratingCount = await Prorating.count({ propertyID: _id });
        const rating = await Prorating.aggregate([
            { $group: { _id: "$propertyID", avg_val: { $avg: "$rating" } } },
            { $match: { _id: _id } },
            { $project: { _id: 1, avg_val: 1 } },
        ]);

        res.json({ status: true, rating, ratingCount });
    } catch (err) {
        res.json({ status: false, err });
    }
};

export { create, getAll, getOne };
