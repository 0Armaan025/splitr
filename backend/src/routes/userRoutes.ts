import { Router } from "express";
import { authMiddleware, AuthRequest } from "../middleware/authMiddleware";

const router = Router();

router.get("/profile", authMiddleware, (req: AuthRequest, res) => {
    return res.json({
        ok: true,
        message: 'Welcome to your profile',
        user: req.user,
    });
});

export default router;