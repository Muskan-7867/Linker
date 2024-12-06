import mongoose, { Document} from "mongoose";

//  Link interface
interface Link extends Document {
  title: string;
  icon: string;
  url: string;
}

//  Link schema
const linkSchema = new mongoose.Schema<Link>({
  title: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});


export default mongoose.model<Link>("User", linkSchema);
