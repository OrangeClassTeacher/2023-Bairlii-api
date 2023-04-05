import { Schema, model } from "mongoose";

interface IAdvertisements {
  userID: string;
  propertyID: string;
  price: number;
  rentingDuration: number;
  paymentContition: string;
  adDuration: number;
}

const advertisementsSchema = new Schema<IAdvertisements>(
  {
    userID: String,
    propertyID: String,
    price: Number,
    rentingDuration: Number,
    paymentContition: String,
    adDuration: Number
  },
  { timestamps: true }
);

const Advertisements = model<IAdvertisements>("advertisement", advertisementsSchema);

export default Advertisements;
