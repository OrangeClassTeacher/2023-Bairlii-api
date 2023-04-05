import { Schema, model } from "mongoose";

interface IProcommend {
  propertyID: string;
  userID: string;
  comment: string[];
}

const procommendSchema = new Schema<IProcommend>(
  {
    propertyID: String,
    userID: String,
    comment: [String],
  },
  {
    timestamps: true,
  }
);

const Procommend = model<IProcommend>("procommend", procommendSchema);

export default Procommend;
