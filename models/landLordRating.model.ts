import { Schema, model } from "mongoose";

interface ILandlordRating {
  ratedUserID: string;
  rating: number;
}

const landlordRatingSchema = new Schema<ILandlordRating>(
  {
    ratedUserID: String,
    rating: Number,  
  },
  { timestamps: true }
);

const LandlordRating = model<ILandlordRating>("landlordRatings", landlordRatingSchema);

export default LandlordRating;
