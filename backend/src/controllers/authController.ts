import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { supabase } from "../config/supabase";

const JWT_SECRET = process.env.JWT_SECRET || "123456";

export const signUp = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.json({ error: "Name, Email and password are required." }).status(400);
    }


    const hashedPass = await bcrypt.hash(password, 10);

    // insert into db

    const { data, error } = await supabase
      .from("users_custom")
      .insert([
        { email, password_hash: hashedPass }
      ])
      .select("id, email");

    if (error) {
      return res.status(500).json({
        message: "Server error",
        error: error.message,
        ok: false,
      });
    }

    // let's actuallly do this

    const token = jwt.sign({
      id: data[0].id, email: data[0].email
    }, JWT_SECRET, { expiresIn: '7d'
    })

    return res.status(201).json({
      message: "User created",
      ok: true,
      user: data[0],
      token
    });


    // MOCK SIGN UP

    // const newUser = {
    //     id: Date.now(),
    //     email,
    // };

    // res.status(201).json({
    //     message: "created",
    //     user: newUser,
    // });
  }
  catch (err: any) {
    res.status(500).json({ message: "Server error", error: err.message || String(err), ok: false })
  }
}

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    // // ❌ mock login for now
    // if (email === "test@example.com" && password === "123456") {
    //   return res.status(200).json({ message: "Login successful" });
    // }

    const { data, error } = await supabase
    .from("users_custom")
    .select("*")
    .eq("email", email)
    .single();

    if(error || !data) {
      return res.status(401).json({
        ok: false,
        message: "Invalid credentials",
      });
    }

    // compare pass

    const match = await bcrypt.compare(password, data.password_hash);

    if(!match) {
      return res.status(401).json({
        ok: false,
        message: "Invalid credentials",
      });
    }

    // JWT TIME, YAEYYYYY

    const token = jwt.sign(
      {id: data.id, email: data.email},
      JWT_SECRET,
      {expiresIn: '7d'}
    );


    return res.json({ok: true, token});
    
    // res.status(401).json({ message: "Invalid credentials" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// GET user by email

export const getUserByEmail = async (req: Request, res: Response) => {
  try {
    const {email} = req.params;

    const {data, error} = await supabase
    .from("users_custom")
    .select("*")
    .eq("email", email)
    .single();

    if(error  || !data) {
      return res.status(404).json({
        ok: false,
        error: "User not found!",
      });
    }

    return res.json({
      ok: true,
      user: data
    });
  }
  catch(err: any) {
    return res.status(500).json({ok: false,error: err.message || String(err)});
  }
}

export const searchUsers = async (req: Request, res: Response) => {
  try {
    const { q } = req.query; // e.g. /auth/search?q=arm

    if (!q) return res.status(400).json({ ok: false, error: "Query required" });

    const { data, error } = await supabase
      .from("users_custom")
      .select("id, email, created_at")
      .ilike("email", `%${q}%`);

    if (error) return res.status(500).json({ ok: false, error: error.message });

    return res.json({ ok: true, users: data });
  } catch (err: any) {
    return res.status(500).json({ ok: false, error: err.message || String(err) });
  }
};

export const logout = async (_req: Request, res: Response) => {
  return res.json({ ok: true, message: "Logged out (client must delete token)" });
};