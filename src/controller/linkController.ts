import { NextFunction, Request, Response } from "express";
import linkModel from "../models/linktree.model";
import createHttpError from "http-errors";

// POST Controller: Create a new link
export const createLink = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { title, icon, url } = req.body;

    // Validate required fields
    if (!title || !icon || !url) {
      return next(createHttpError(400, "All fields are required"));
    }

    // Create a new link
    const newLink = new linkModel({ title, icon, url });

    // Save the link to the database
    await newLink.save();

    res.status(201).json({ message: "Link created successfully", link: newLink });
  } catch (error) {
   
    console.error(error);
    return next(createHttpError(500, "Internal Server Error"));
  }
};

// PUT Controller: Edit an existing link
export const editLink = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = req.params;
    const { title, icon, url } = req.body;

    // Validate required fields
    if (!title || !icon || !url) {
      return next(createHttpError(400, "All fields are required"));
    }

    // Update the link by ID
    const updatedLink = await linkModel.findByIdAndUpdate(
      id,
      { title, icon, url },
      { new: true, runValidators: true }
    );

    // If no link is found
    if (!updatedLink) {
      return next(createHttpError(404, "Link not found"));
    }


    res.status(200).json({ message: "Link updated successfully", link: updatedLink });
  } catch (error) {
   
    console.error(error);
    return next(createHttpError(500, "Internal Server Error"));
  }
};
