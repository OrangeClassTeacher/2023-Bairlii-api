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
  try {
    const result = await Advertisements.find()
      .populate({ path: "userID" })
      .populate({ path: "propertyID" })
      .limit(10);
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

export { create, getAll, getOne };
