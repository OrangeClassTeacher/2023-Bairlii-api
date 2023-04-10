import { Request, Response } from "express";
import RenterRating from "../models/renterRating.model";


const create = (req: Request, res: Response) => {
  res.json({ status: true });
};

const getAll = async (req: Request, res: Response) => {
  try {
    const result = await RenterRating.find().limit(10);
    res.json({ status: true, result });
  } catch (err) {
    res.json({ status: false, message: err });
  }
};

const getOne = async (req: Request, res: Response) => {
  const { _id } = req.params;
  try {
    const result = await RenterRating.find({ _id });
    res.json({ status: true, result });
  } catch (err) {
    res.json({ status: false, err });
  }
};

export { create, getAll, getOne };