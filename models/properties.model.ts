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
  category: number;
  description: string;
  category: string;
}

const propertiesSchema = new Schema<IProperties>(
  {
    userID: String,
    rating: String,
    comments: [String],
    photos: [String],
    PanoramaPhoto: [String],
    category: String,
    guestCount: Number,
    roomCount: Number,
    bathroomCount: Number,
    area: Number,
    coordinates: {
      lat: Number,
      lng: Number,
    },
    locationName: String,
    category: Number,
    description: String,
  },
  { timestamps: true }
);

const Properties = model<IProperties>("properties", propertiesSchema);

export default Properties;
