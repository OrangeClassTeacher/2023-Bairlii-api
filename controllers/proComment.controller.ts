import { Request, Response } from "express";
import Procomment from "../models/proComment.model";

const create = (req: Request, res: Response) => {
  res.json({ status: true });
};

const getAll = async (req: Request, res: Response) => {
  try {
    const count = await Procomment.find().count();
    const result = await Procomment.find();
    res.json({ status: true, result, count });
  } catch (err) {
    res.json({ status: false, message: err });
  }
};

const deleteComment = async (req: Request, res: Response) => {
  const { _id } = req.params;
  console.log(_id);
  
  if (!_id) {
    res.json({ status: false, message: "id not found" });
    return;
  }
  try {
  await Procomment.findByIdAndDelete({ _id });
    res.json({ status: true, message: "success" });
  } catch (err) {
    res.json({ status: false, message: err });
  }
};

const getOne = async (req: Request, res: Response) => {
  const { _id } = req.params;
  try {
    const result = await Procomment.find({ _id });
    res.json({ status: true, result });
  } catch (err) {
    res.json({ status: false, err });
  }
};

export { create, getAll, getOne, deleteComment };
