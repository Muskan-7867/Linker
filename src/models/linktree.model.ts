import mongoose, { Document } from "mongoose";

interface links {
  title: string;
  icon: string;
  url: string;
}
//  Link interface
interface LinkTree extends Document {
  treeName: string;
  links: links[];
  avatar:string;
}

//  Link schema
const linkTreeSchema = new mongoose.Schema<LinkTree>({
  treeName: {
    type: String,
    required: true,
  },
  avatar: {
    public_id: {
      type: String,
      required: false,
    },
    public_url: {
      type: String,
      required: false,
    },
  },
  links: [
    {

      icon: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },

      url: {
        type: String,
        required: true,
      },
    },
  ],
});

export default mongoose.model<LinkTree>("LinkTree", linkTreeSchema);