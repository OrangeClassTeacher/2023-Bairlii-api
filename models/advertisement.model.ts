import { Schema, model, Types } from "mongoose";

interface IAdvertisements {
  userID: { type: Types.ObjectId };
  propertyID: { type: Types.ObjectId };
  price: number;
  rentingDuration: number;
  paymentContition: string;
  adDuration: number;
}

const advertisementsSchema = new Schema<IAdvertisements>(
  {
    userID: {
      type: Types.ObjectId,
      ref: "users",
    },
    propertyID: {
      type: Types.ObjectId,
      ref: "users",
    },
    price: Number,
    rentingDuration: Number,
    paymentContition: String,
    adDuration: Number,
  },
  { timestamps: true }
);

const Advertisements = model<IAdvertisements>(
  "advertisement",
  advertisementsSchema
);

export default Advertisements;
