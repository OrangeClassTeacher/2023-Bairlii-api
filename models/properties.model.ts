import { Schema, model, Types } from "mongoose";

interface IProperties {
    userID: string;
    rating: string;
    comments: string[];
    photos: string[];
    panaromaPhoto: string;
    roomNumber: number;
    area: number;
    locationCoordinate: {
        lang: number;
        long: number;
    };
    locationName: string;
}

const propertiesSchema = new Schema<IProperties>(
    {
        userID: String,
        rating: String,
        comments: [String],
        photos: [String],
        panaromaPhoto: String,
        roomNumber: Number,
        area: Number,
        locationCoordinate: {
            lang: Number,
            long: Number,
        },
        locationName: String,
    },
    { timestamps: true }
);

const Properties = model<IProperties>("properties", propertiesSchema);

export default Properties;
