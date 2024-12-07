import { NextFunction, Request, Response } from "express";
import linkModel from "../models/linktree.model";
import createHttpError from "http-errors";
import linktreeModel from "../models/linktree.model";



// POST Controller: Create a new link
export const createLink = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { treeName, title, icon, url } = req.body;

    // Validate required fields
    if (!treeName || !title || !icon || !url) {
      return next(createHttpError(400, "All fields are required"));
    }

    // Create a new LinkTree
    const newLink = new linkModel({
      treeName,
      links: [{ title, icon, url }],
    });

    // Save the document to the database
    await newLink.save();

    res.status(201).json({ message: "Link created successfully", link: newLink });
  } catch (error) {
    console.error(error);
    return next(createHttpError(500, "Internal Server Error"));
  }
};
export const editLink = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id, treeName, links } = req.body;

    // Validate required fields
    if (!id || !treeName || !Array.isArray(links)) {
      return next(createHttpError(400, "'id', 'treeName', and 'links' fields are required"));
    }

    //  Add default value  if icon is required for each link
    links.forEach(link => {
      if (!link.icon) {
        //  default icon
        link.icon = "defaultIcon.svg";  
      }
    });

    // Replace  Linktree with new data
    const updatedLinktree = await linktreeModel.findByIdAndUpdate(
      id,
      { treeName, links },
      { new: true, runValidators: true }
    );

    if (!updatedLinktree) {
      throw createHttpError(404, "Linktree not found.");
    }

    // Send a success response
    res.status(200).json({
      message: "Linktree updated successfully.",
      linktree: updatedLinktree,
    });
  } catch (error) {
    console.error("Error updating Linktree:", error);
    next(createHttpError(500, "Internal Server Error"));
  }
};





