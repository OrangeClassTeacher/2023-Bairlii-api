import { Request, Response } from "express";
import Advertisements from "../models/advertisement.model";

const create = async (req: Request, res: Response) => {
    try {
        const result = await Advertisements.create(req.body);
        res.json({ status: true, result });
    } catch (err) {
        res.json({ status: false, message: err });
    }
};

const getAll = async (req: Request, res: Response) => {
    const { pageNumber } = req.body;

    try {
        const rowCount = await Advertisements.find().count();
        const result = await Advertisements.find()
            .limit(12)
            .skip(12 * (pageNumber - 1))
            .populate({ path: "userID" })
            .populate({ path: "propertyID" });
        res.json({ status: true, result, rowCount });
    } catch (err) {
        res.json({ status: false, message: err });
    }
};

const getAllWithOutPagination = async (req: Request, res: Response) => {
    try {
        const result = await Advertisements.find()
            .populate({ path: "userID" })
            .populate({ path: "propertyID" });
        res.json({ status: true, result });
    } catch (err) {
        res.json({ status: false, message: err });
    }
};

const getOne = async (req: Request, res: Response) => {
    const { _id } = req.params;
    try {
        const result = await Advertisements.findById({ _id })
            .populate({ path: "userID" })
            .populate({ path: "propertyID" });
        res.json({ status: true, result });
    } catch (err) {
        res.json({ status: false, err });
    }
};
const PriceFilter = async (req: Request, res: Response) => {
    const price = req.body;
    console.log(price);

    try {
        const result = await Advertisements.find({
            price: { $lte: 500000 },
        }).sort({ createdAt: -1 });
        res.json({ status: true, result });
        if (result) {
            res.json({
                status: true,
                result: { result },
            });
        } else {
            res.json({ status: false, message: "Price not found" });
        }
    } catch (err) {
        res.json({ status: false, message: err });
    }
};

const getAdvertisementByPropertyId = async (req: Request, res: Response) => {
    const { _id } = req.params;

    if (!_id) {
        res.json({ status: false, message: "User ID not found" });
        return;
    }

    try {
        const result = await Advertisements.find({ propertyID: _id });
        if (result[0]) {
            res.status(200).json({ status: true, result });
        } else {
            res.status(404).json({
                status: false,
                message: "Advertisement not found",
            });
        }
    } catch (err) {
        res.status(404).json({ status: false, message: err });
    }
};

const getPropertiesByUserId = async (req: Request, res: Response) => {
    const { _id } = req.params;

    if (!_id) {
        res.status(404).json({ status: false, message: "User ID not found" });
        return;
    }

    try {
        const result = await Advertisements.find({ userID: _id })
            .populate({ path: "userID" })
            .populate({ path: "propertyID" });
        res.json({ status: true, result });
    } catch (err) {
        res.json({ status: false, message: err });
    }
};

const RemoveAdvertisement = async (req: Request, res: Response) => {
    const { _id } = req.params;

    if (!_id) {
        res.json({ status: false, message: "User ID not found" });
    }

    try {
        const result = await Advertisements.findByIdAndRemove({ _id });
        res.json({ status: true, result });
    } catch (err) {
        res.json({ status: false, message: err });
    }
};

export {
    create,
    getAll,
    getOne,
    PriceFilter,
    getAllWithOutPagination,
    getAdvertisementByPropertyId,
    getPropertiesByUserId,
    RemoveAdvertisement,
};
