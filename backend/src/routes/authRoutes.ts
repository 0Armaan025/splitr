import { Router } from "express";
import { authMiddleware } from "../middleware/authMiddleware";
import { signUp, login , logout, searchUsers, getUserByEmail} from "../controllers/authController";

const router = Router();

router.post("/signup", signUp);
router.post("/login", login);
router.post("/logout", logout);

router.get("/search", authMiddleware, searchUsers);
router.get("/user/:email", authMiddleware, getUserByEmail);
export default router;

// wow so we can just pass functions as in for routes? niceeeeeeee