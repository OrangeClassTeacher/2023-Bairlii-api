import { Schema, model, Types } from "mongoose";

interface IUsers {
    userName: string;
    firstName: string;
    lastName: string;
    email: string;
    address: {
        district: string;
        subdistrict: number;
        street: string;
        block?: number;
        fence?: number;
    }
    password: string;
    profilePicture: string;
    phoneNumber: number;
    ratingAsRenter: string;
    ratingAsLandlord: string;
}

const usersSchema = new Schema<IUsers>({
    userName: String,
    firstName: String,
    lastName: String,
    email: String,
    address: {
        district: String,
        subdistrict: Number,
        street: String,
        block: Number,
        fence: Number,
    },
    password: String,
    profilePicture: String,
    phoneNumber: Number,
    ratingAsRenter: String,
    ratingAsLandlord: String,
});

const Users = model<IUsers>("users", usersSchema);

export default Users;