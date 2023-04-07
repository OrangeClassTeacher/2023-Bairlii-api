import { Schema, model } from "mongoose";

interface IProcomment {
  propertyID: string;
  userID: string;
  comment: string[];
}

const procommentSchema = new Schema<IProcomment>(
  {
    propertyID: String,
    userID: String,
    comment: [String],
  },
  {
    timestamps: true,
  }
);

const Procomment = model<IProcomment>("procomment", procommentSchema);

export default Procomment;
