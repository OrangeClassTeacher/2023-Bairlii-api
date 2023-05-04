import { Schema, model, Types } from "mongoose";

interface IProperties {
  userID: String;
  rating: string;
  comments: string[];
  photos: string[];
  PanoramaPhoto: string[];

  guestCount: number;
  roomCount: number;
  bathroomCount: number;

  area: number;
  coordinates: {
    lat: number;
    lng: number;
  };
  locationName: string;
  description: string;
}

const propertiesSchema = new Schema<IProperties>(
  {
    userID: String,
    rating: String,
    comments: [String],
    photos: [String],
    PanoramaPhoto: [String],

    guestCount: Number,
    roomCount: Number,
    bathroomCount: Number,
    area: Number,
    coordinates: {
      lat: Number,
      lng: Number,
    },
    locationName: String,
    description: String,
  },
  { timestamps: true }
);

const Properties = model<IProperties>("properties", propertiesSchema);

export default Properties;
