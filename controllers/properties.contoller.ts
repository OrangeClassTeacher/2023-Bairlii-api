import { Request, Response } from "express";
import Properties from "../models/properties.model";

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
    const result = await Properties.find().limit(10);
    res.json({ status: true, result });
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

const getPropertiesByUserId = async (req: Request, res: Response) => {
  const { _id } = req.params;
  try {
    const result = await Properties.find({ userID: _id });
    res.json({ status: true, result });
  } catch (err) {
    res.json({ status: false, err });
  }
};

const updateProperties = async (req: Request, res: Response) => {
  const { _id } = req.body;

  try {
    const edittingProperty = await Properties.findById({ _id });
    // console.log(edittingProperty);

    if (edittingProperty) {
      console.log(edittingProperty._id.toString());

      const result = await Properties.findByIdAndUpdate(
        edittingProperty._id.toString(),
        req.body
      );
      console.log("dada");

      res.json({ status: "updated", result });
    } else {
      res.json({ status: false, message: "property not found" });
    }
  } catch (err) {
    res.json({ status: false, message: err, dada: "dada" });
  }
};

export { create, getAll, getOne, getPropertiesByUserId, updateProperties };
