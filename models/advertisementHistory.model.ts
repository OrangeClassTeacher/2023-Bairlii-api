import { Schema, model } from "mongoose";

interface IAdHistory {
    renterID: string;
    advertisementID: string;
}

const adHistorySchema = new Schema<IAdHistory>(
    {
        renterID: String,
        advertisementID: String,
    },
    { timestamps: true }
);

const AdHistory = model<IAdHistory>("adHistory", adHistorySchema);

export default AdHistory;
