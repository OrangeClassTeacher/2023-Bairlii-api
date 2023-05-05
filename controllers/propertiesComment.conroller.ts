import { Request, Response } from "express";
import Procomment from "../models/propertiesComment.model";

const create = async (req: Request, res: Response) => {
  try {
    const result = await Procomment.create(req.body);
    res.json({ status: true, result });
  } catch (err) {
    res.json({ status: false, message: err });
  }
};

const getAll = async (req: Request, res: Response) => {
  try {
    const result = await Procomment.find().limit(10);
    res.json({ status: true, result });
  } catch (err) {
    res.json({ status: false, message: err });
  }
};

const getOne = async (req: Request, res: Response) => {
  const { _id } = req.params;
  try {
    const result = await Procomment.findById({ _id });
    res.json({ status: true, result });
  } catch (err) {
    res.json({ status: false, err });
  }
};

const findByPropertyId = async (req: Request, res: Response) => {
  const { _id } = req.params;
  try {
    const result = await Procomment.find({ propertyID: _id });
    res.json({ status: true, result });
  } catch (err) {
    res.json({ status: false, err });
  }
};

export { create, getAll, getOne, findByPropertyId };
