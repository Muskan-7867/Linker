import { NextFunction, Request, Response } from "express";
import linkModel from "../models/linktree.model";
import createHttpError from "http-errors";
import linktreeModel from "../models/linktree.model"

// POST Controller: Create a new link
export const createLinktree = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { treeName, links } = req.body; // Expecting `links` to be an array of objects

    // Validate required fields
    if (!treeName || !Array.isArray(links) || links.length === 0) {
      return next(createHttpError(400, "Tree name and at least one link are required."));
    }

    // Validate each link in the `links` array
    for (const link of links) {
      if (!link.title || !link.icon || !link.url) {
        return next(
          createHttpError(400, "Each link must have a title, icon, and URL.")
        );
      }
    }

    // Create a new Linktree
    const newLinktree = new linkModel({
      treeName,
      links,
    });

    // Save the Linktree to the database
    await newLinktree.save();

    res.status(201).json({
      message: "Linktree created successfully",
      link: newLinktree,
    });
  } catch (error) {
    console.error("Error creating Linktree:", error);
    return next(createHttpError(500, "Internal Server Error"));
  }
};
export const editLinktree = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    console.log("Incoming request body:", req.body); // Log the request body

    const { id, treeName, links } = req.body;

    if (!id || !treeName || !Array.isArray(links)) {
      return next(
        createHttpError(
          400,
          "'id', 'treeName', and 'links' fields are required"
        )
      );
    }

    links.forEach((link) => {
      if (!link.icon) {
        link.icon = "defaultIcon.svg";
      }
    });

    const updatedLinktree = await linktreeModel.findByIdAndUpdate(
      id,
      { treeName, links },
      { new: true, runValidators: true }
    );

    if (!updatedLinktree) {
      throw createHttpError(404, "Linktree not found.");
    }

    res.status(200).json({
      message: "Linktree updated successfully.",
      linktree: updatedLinktree,
    });
  } catch (error) {
    console.error("Error updating Linktree:", error);
    next(createHttpError(500, "Internal Server Error"));
  }
};

export const deleteLinktree = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = req.params;
    if (!id) {
      return next(createHttpError(400, "id is required"));
    }

    const deletedLinktree = await linktreeModel.findByIdAndDelete(id);
    if (!deletedLinktree) {
      return next(createHttpError(404, "Linktree not found."));
    }

    // Send a success response
    res.status(200).json({
      message: "Linktree deleted successfully.",
      linktree: deletedLinktree,
    });
  } catch {
    return next(createHttpError(500, "Internal Server Error"));
  }
};
