import { Schema, model } from "mongoose";

interface IRenterRating {
  ratedUserID: string;
  rating: number;
}

const renterRatingSchema = new Schema<IRenterRating>(
  {
    ratedUserID: String,
    rating: Number,  
  },
  { timestamps: true }
);

const RenterRating = model<IRenterRating>("renterRatings", renterRatingSchema);

export default RenterRating;