import { Schema, model } from "mongoose";

interface IProcomment {
  propertyID: string;
  userID: string;
  comment: string[];
}

const proCommentSchema = new Schema<IProcomment>(
  {
    propertyID: String,
    userID: String,
    comment: [String],
  },
  {
    timestamps: true,
  }
);

const Procomment = model<IProcomment>("proComment", proCommentSchema);

export default Procomment;
