import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../models/userModel";


const demo = async (req: Request, res: Response) => {
  res.send("demo succcess");
};

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, email, password } = req.body;

    // Validate request fields
    if (!name || !email || !password) {
      const error = createHttpError(400, "All fields are required");
      return next(error);
    }

    // Check if user already exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      const error = createHttpError(400, "User already exists");
      return next(error);
    }

    // Hash the password
    const saltRounds = 10; // Adjust salt rounds for desired security
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create new user
    const newUser = await userModel.create({
      name,
      email,
      password: hashedPassword,
    });

    // Generate JWT token
    const token = jwt.sign(
      { userId: newUser._id, email: newUser.email },
      process.env.JWT_SECRET as string,
      { expiresIn: "1h" }
    );

    res.status(201).json({
      message: "User created successfully",
      userId: newUser._id,
      token,
    });
  } catch (error) {
    next(error);
  }
};

const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      throw createHttpError(400, "All fields are required");
    }
  
    const user = await userModel.findOne({ email });
  
    if (!user) {
      throw createHttpError(404, "User not found");
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password)
    if(!isPasswordMatch){
      return next(createHttpError(404,"Password is incorrect"))
    }

    //create accesstoken
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET as string,
      { expiresIn: "1h" }
    );
  
    res.json({ accesstoken: token });
  } catch (error) {
    next(error); 
  }
}  

export { demo, createUser, loginUser };
