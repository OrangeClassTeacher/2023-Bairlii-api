import { Request, Response } from "express";
import Properties from "../models/properties.model";
import Advertisements from "../models/advertisement.model";

const create = async (req: Request, res: Response) => {
    console.log(req.body);

    try {
        const result = await Properties.create(req.body);
        res.json({ status: true, result });
    } catch (err) {
        res.json({ status: false, message: err });
    }
};

const getAll = async (req: Request, res: Response) => {
    try {
        const result = await Properties.find();
        const count = await Properties.find().count();
        res.json({ status: true, result, count });
    } catch (err) {
        res.json({ status: false, message: err });
    }
};

const getOne = async (req: Request, res: Response) => {
    const { _id } = req.params;
    try {
        const result = await Properties.findById({ _id });
        res.json({ status: true, result });
    } catch (err) {
        res.json({ status: false, err });
    }
};

const updateProperties = async (req: Request, res: Response) => {
    const { _id } = req.body;

    try {
        const edittingProperty = await Properties.findById({ _id });
        if (edittingProperty) {
            const result = await Properties.findByIdAndUpdate(
                edittingProperty._id.toString(),
                req.body
            );

            res.json({ status: "updated", result });
        } else {
            res.json({ status: false, message: "property not found" });
        }
    } catch (err) {
        res.json({ status: false, message: err, dada: "dada" });
    }
};

const getPropertiesByUserId = async (req: Request, res: Response) => {
    const { _id } = req.params;

    if (!_id) {
        res.status(404).json({ status: false, message: "User ID not found" });
        return;
    }

    try {
        const result = await Properties.find({ userID: _id });
        res.json({ status: true, result });
    } catch (err) {
        res.json({ status: false, message: err });
    }
};

const DistrictFilter = async (req: Request, res: Response) => {
    const { _id } = req.params;

    try {
        // const filter = await Properties.aggregate([
        //     { $lookup: { from: "advertisements", localField: userID, foreignField: userID, as: "advertisements" } },
        // ])
        // res.json({ status: true, filter });
        const filterDistrict = await Properties.find(
            { category: _id } || { area: 100 }
        );

        res.json({ status: true, filterDistrict });
        if (filterDistrict) {
            res.json({
                status: true,
                result: filterDistrict,
            });
        } else {
            res.json({ status: false, message: "District not found" });
        }
    } catch (err) {
        res.json({ status: false, err });
    }
};

const RoomFilter1 = async (req: Request, res: Response) => {
    try {
        const result = await Properties.find({ roomCount: { $lte: 1 } }).sort({
            createdAt: -1,
        });
        res.json({ status: true, result });
        if (result) {
            res.json({
                status: true,
                result: { result },
            });
        } else {
            res.json({ status: false, message: "Room not found" });
        }
    } catch (err) {
        res.json({ status: true, message: "Test" });
    }
};
const SquareFilter = async (req: Request, res: Response) => {
    const { area } = req.params;
    console.log(area);

    try {
        const result = await Properties.find({ area: req.params.area });
        res.json({ status: true, result });
        if (result) {
            res.json({
                status: true,
                result: { result },
            });
        } else {
            res.json({ status: false, message: "Area not found" });
        }
    } catch (err) {
        res.json({ status: false, message: err });
    }
};

const RemoveProperty = async (req: Request, res: Response) => {
    const { _id } = req.params;

    if (!_id) {
        res.json({ status: false, message: "User ID not found" });
    }

    try {
        const result = await Properties.findByIdAndRemove({ _id });
        const resultAboutAdvertisement = await Advertisements.findOneAndRemove({
            propertyID: _id,
        });
        res.json({ status: true, result, resultAboutAdvertisement });
    } catch (err) {
        res.json({ status: false, message: err });
    }
};

export {
    create,
    getAll,
    getOne,
    getPropertiesByUserId,
    DistrictFilter,
    updateProperties,
    RoomFilter1,
    SquareFilter,
    RemoveProperty,
};
