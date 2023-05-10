import { Request, Response } from "express";
import Properties from "../models/properties.model";
import Advertisements from "../models/advertisement.model";


const getOne = async (req: Request, res: Response) => {
    const { userID } = req.params;
    try {
        const filter = await Properties.aggregate([
            { $lookup: { from: "advertisements", localField: userID, foreignField: userID, as: "advertisements" } },
        ])
        res.json({ status: true, filter });
    } catch (err) {
        res.json({ status: false, err });
    }
};

const PriceFilter = async (req: Request, res: Response) => {
    const { _id } = req.params;
    try {
      const result = await Advertisements.find({ price: {$lte: 500000} })
        .populate({
          path: "userId",
        })
        .sort({ createdAt: -1 });

      res.json({ status: true, result });
    } catch (err) {
      res.json({ status: false, message: err });
    }
}
const SquareFilter = async (req: Request, res: Response) => {
    const {_id} = req.params;
    try{
        const result = await Properties.find({area: {$lte: 100}}).sort({createdAt: -1});
        res.json({status: true, result});
    } catch (err) {
        res.json({status: false, message: err});
    }
}
const RoomFilter1 = async (req: Request, res: Response) => {
    const  {_id} =req.params;
    try{
        const result = await Properties.find({roomCount: {$lte: 1}}).sort({createdAt: -1})
        res.json({status: true, result});
    } catch (err) {
        res.json({status: false, message: err});
    }
}
export {  getOne, PriceFilter, SquareFilter, RoomFilter1 };