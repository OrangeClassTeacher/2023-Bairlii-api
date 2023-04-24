import { Schema, model, Types } from "mongoose";

interface IUsers {
    firstName: string;
    lastName: string;
    email: string;
    address: {
        district: string;
        subdistrict?: number;
        street?: string;
        block?: number;
        fence?: number;
    };
    password: string;
    profilePicture: string;
    phoneNumber: number;
    ratingAsRenter?: string;
    ratingAsLandlord?: string;
}

const usersSchema = new Schema<IUsers>(
    {
        firstName: {
            type: String,
            required: [true, "Нэрээ оруулна уу"],
        },
        lastName: {
            type: String,
            required: [true, "Овогоо оруулна уу"],
        },
        email: {
            type: String,
            required: [true, "Хэрэглэгчийн имэйл хаягийг оруулна уу"],
            unique: true,
            match: [
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                "Имэйл хаяг буруу байна.",
            ],
        },
        address: {
            district: {
                type: String,
                required: [true, "Гэрийн хаягаа оруулна уу"],
            },
            subdistrict: Number,
            street: String,
            block: Number,
            fence: Number,
        },
        password: {
            type: String,
            required: [true, "Нууц үгээ оруулна уу"],
        },
        profilePicture: {
            type: String,
            required: [true, "Та зураг оруулна уу"],
        },
        phoneNumber: {
            type: Number,
            length: 8,
            required: [true, "Утасны дугаараа оруулна уу"],
        },
        ratingAsRenter: String,
        ratingAsLandlord: String,
    },
    { timestamps: true }
);

const Users = model<IUsers>("users", usersSchema);

export default Users;
