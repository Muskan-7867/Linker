import mongoose, { Document } from "mongoose";

// Linktree structure
interface Linktree {
  templateName: string;
  links: mongoose.Types.ObjectId[]; 
}

// User interface, extending Mongoose's Document
export interface User extends Document {
  username: string;
  email: string;
  password: string;
  avatar?: string; 
  linktree?: Linktree; 
}

// User schema
const userSchema = new mongoose.Schema<User>(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      public_id: String,
      url: String,
    },
    linktree: {
      type: {
        templateName: { type: String, required: true },
        links: [{ type: mongoose.Schema.Types.ObjectId, ref: "Link" }],
      },
      required: false, // Make the entire `linktree` object optional
    },
  },
  { timestamps: true } // timestamps for createdAt and updatedAt
);

export default mongoose.model<User>("User", userSchema);
