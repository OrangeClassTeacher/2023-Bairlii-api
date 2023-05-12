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

export { create, getAll, getOne, PriceFilter, getAllWithOutPagination };
