import { Schema, model } from "mongoose";

interface IProrating {
  propertyID: string;
  rating: string;
  userID: string;
}

const proratingSchema = new Schema<IProrating>(
  {
    propertyID: String,
    rating: String,
    userID: String,
  },
  {
    timestamps: true,
  }
);

const Prorating = model<IProrating>("prorating", proratingSchema);

export default Prorating;
