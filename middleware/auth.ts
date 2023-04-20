import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const token =
        req.body.token || req.query.token || req.headers["x-access-token"];

    if (!token) {
        return res.status(403).json({
            success: false,
            message: "User have no token",
        });
    }

    try {
        const secretToken: string = process.env.TOKEN_KEY || "";
        const decoded = jwt.verify(token, secretToken);
        return next();
    } catch {
        return res.json({
            success: false,
            message: "User token incorrect or inactive",
        });
    }
};

export default verifyToken;
