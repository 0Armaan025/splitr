import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { supabase } from "./config/supabase";
import authRoutes from "./routes/authRoutes";
import userRoutes from "./routes/userRoutes";

dotenv.config();

const PORT = process.env.PORT || 4000;
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:3000";

const app = express();
app.use(cors({ origin: FRONTEND_URL, credentials: true }));
app.use(express.json());
app.use(cookieParser());

// Test route to check if server is running
app.get("/", (req, res) => {
    res.send("Server is running");
});

app.get('/ping', async (_req, res) => {
    try {
        const { data, error } = await supabase.from("users_custom").select('id').limit(1);
        if (error) {
            return res.status(500).json({
                ok: false,
                error: error.message
            });
        }
        return res.json({
            ok: true,
            sample: data as any ?? []
        });
    }
    catch(error:any) {
        return res.status(500).json({ok: false,error: error.message || String(error)});
    }
})

app.use('/auth', authRoutes);
app.use("/user", userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});