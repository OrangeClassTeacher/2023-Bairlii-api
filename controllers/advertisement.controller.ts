import { Request, Response } from "express";
import Advertisements from "../models/advertisement.model";
import Properties from "../models/properties.model";

const create = async (req: Request, res: Response) => {
    try {
        const result = await Advertisements.create(req.body);
        res.json({ status: true, result });
    } catch (err) {
        res.json({ status: false, message: err });
    }
};

const getAll = async (req: Request, res: Response) => {
    const { pageNumber, category, rooms, sort } = req.body;
    const convertedRooms =
        rooms == "4 өрөө"
            ? 4
            : rooms == "3 өрөө"
            ? 3
            : rooms == "2 өрөө"
            ? 2
            : rooms == "1 өрөө"
            ? 1
            : "";

    const sortingCategory: any = category == undefined ? "" : category;
    const match =
        rooms == undefined
            ? {
                  "propertyID.roomCount": {
                      $gt: 0,
                  },
              }
            : {
                  "propertyID.roomCount": {
                      $eq: convertedRooms,
                  },
              };

    try {
        const rowCount = await Advertisements.find().count();
        const result = await Advertisements.aggregate([
            {
                $lookup: {
                    from: "properties",
                    localField: "propertyID",
                    foreignField: "_id",
                    as: "propertyID",
                },
            },
            { $unwind: "$propertyID" },
            {
                $lookup: {
                    from: "users",
                    localField: "userID",
                    foreignField: "_id",
                    as: "userID",
                },
            },
            { $unwind: "$userID" },
            {
                $match: {
                    $and: [
                        {
                            "propertyID.category": {
                                $regex: sortingCategory,
                                $options: "i",
                            },
                        },
                        match,
                    ],
                },
            },
        ])
            .limit(12)
            .skip(12 * (pageNumber - 1));
        res.json({ status: true, result, rowCount });
    } catch (err) {
        res.json({ status: false, message: err });
    }
};

const getAllWithOutPagination = async (req: Request, res: Response) => {
    const { category, rooms } = req.body;
    const convertedRooms =
        rooms == "4 өрөө"
            ? 4
            : rooms == "3 өрөө"
            ? 3
            : rooms == "2 өрөө"
            ? 2
            : rooms == "1 өрөө"
            ? 1
            : "";

    const sortingCategory: any = category == undefined ? "" : category;
    const match =
        rooms == undefined
            ? {
                  "propertyID.roomCount": {
                      $gt: 0,
                  },
              }
            : {
                  "propertyID.roomCount": {
                      $eq: convertedRooms,
                  },
              };

    try {
        const rowCount = await Advertisements.find().count();
        const result = await Advertisements.aggregate([
            {
                $lookup: {
                    from: "properties",
                    localField: "propertyID",
                    foreignField: "_id",
                    as: "propertyID",
                },
            },
            { $unwind: "$propertyID" },
            {
                $lookup: {
                    from: "users",
                    localField: "userID",
                    foreignField: "_id",
                    as: "userID",
                },
            },
            { $unwind: "$userID" },
            {
                $match: {
                    $and: [
                        {
                            "propertyID.category": {
                                $regex: sortingCategory,
                                $options: "i",
                            },
                        },
                        match,
                    ],
                },
            },
        ]);
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

const DistrictFilter = async (req: Request, res: Response) => {
    const { _id, area, category, roomNumber, price, value, locationName } =
        req.params;
    const {
        filteredPricelow,
        filteredPriceHigh,
        filteredAreaLow,
        filteredAreaHigh,
        roomFilterLow,
        roomFilterHigh,
    } = req.body;

    try {
        const priceFilter = category
            ? {
                  "Advertisements.price": {
                      $gte: filteredPricelow,
                      $lte: filteredPriceHigh,
                  },
              }
            : {};

        const areaFilter = category
            ? { area: { $gte: filteredAreaLow, $lte: filteredAreaHigh } }
            : {};

        const roomFilter = category
            ? { roomNumber: { $gte: roomFilterLow, $lte: roomFilterHigh } }
            : {};

        const filter = await Properties.aggregate([
            {
                $lookup: {
                    from: "advertisements",
                    localField: "_id",
                    foreignField: "propertyID",
                    as: "advertisements",
                },
            },
            { $unwind: "$advertisements" },
            { $match: { ...priceFilter, ...areaFilter, ...roomFilter } },
        ]);

        res.json({ status: true, result: filter });
    } catch (err) {
        res.json({ status: false, err });
    }
};

const PriceFilter = async (req: Request, res: Response) => {
    const price = req.body;

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
    DistrictFilter,
    create,
    getAll,
    getOne,
    PriceFilter,
    getAllWithOutPagination,
    getAdvertisementByPropertyId,
    getPropertiesByUserId,
    RemoveAdvertisement,
};
