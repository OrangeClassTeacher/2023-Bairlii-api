import { Schema, model, Types } from "mongoose";

interface IProperties {
  userID: String;
  rating: string;
  comments: string[];
  imageSrc: string[];
  PanoramaPhoto: string[];

  guestCount: number;
  roomCount: number;
  bathroomCount: number;

  area: number;
  locationCoordinate: {
    lang: number;
    long: number;
  };
  locationName: string;
  description: string;
}

const propertiesSchema = new Schema<IProperties>(
  {
    userID: String,
    rating: String,
    comments: [String],
    imageSrc: [String],
    PanoramaPhoto: [String],

    guestCount: Number,
    roomCount: Number,
    bathroomCount: Number,
    area: Number,
    locationCoordinate: {
      lang: Number,
      long: Number,
    },
    locationName: String,
    description: String,
  },
  { timestamps: true }
);

const Properties = model<IProperties>("properties", propertiesSchema);

export default Properties;
