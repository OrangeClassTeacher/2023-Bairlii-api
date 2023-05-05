import { Schema, model } from "mongoose";

interface IProrating {
    propertyID: string;
    rating: number;
    userID: string;
}

const proratingSchema = new Schema<IProrating>(
    {
        propertyID: String,
        rating: Number,
        userID: String,
    },
    {
        timestamps: true,
    }
);

const Prorating = model<IProrating>("prorating", proratingSchema);

export default Prorating;
