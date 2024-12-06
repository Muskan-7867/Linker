import mongoose, { Document } from "mongoose";


type linktree={
  type: mongoose.Schema.Types.ObjectId,
  ref: string
}
export interface User extends Document {
  username: string;
  email: string;
  password: string;
  avatar?: string;
  linktree?: linktree[];
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
      public_id: {
        type: String,
      },
      url: {
        type: String,
      },
    },
    linktree: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "LinkTree",
      }
    ]
  },
  { timestamps: true } 
);

// Create User model
const UserModel =
  mongoose.models.User || mongoose.model<User>("User", userSchema);

export default UserModel;