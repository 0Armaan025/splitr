import {Request, Response, NextFunction} from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "123456";

export interface AuthRequest extends Request {
    user?: any;
    //secret
    //cookies
    //signedCookies
}

export const authMiddleware = (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
        const authHeader = req.headers['authorization'];
        if (!authHeader) {
            return res.status(401).json({
                ok: false,
                message: "No token provided"
            });
        }

        // format: "Bearer <token>"

        const token = authHeader.split(' ')[1];
        if (!token) {
            return res.status(401).json({
                ok: false,
                message: "No token provided or invalid format"
            });
        }

        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        //atching user data to the request
        next();
    }   
    catch(err:any) {
        return res.status(401).json({
            ok: false,
            message: "Unauthorized",
            error: err.message || String(err)
        });
    }
}