import { Schema, model } from "mongoose";

interface IAdmin {
    email: string;
    password: string;
 
}

const adminSchema = new Schema<IAdmin>(
    {
        email: {
            type: String,
            required: [true, "Хэрэглэгчийн имэйл хаягийг оруулна уу"],
            unique: true,
            match: [
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                "Имэйл хаяг буруу байна.",
            ],
        },
        
        password: {
            type: String,
            required: [true, "Нууц үгээ оруулна уу"],
        },
    },
    { timestamps: true }
);

const Admin = model<IAdmin>("admin", adminSchema);

export default Admin;
