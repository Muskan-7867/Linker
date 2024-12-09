import React from "react";
import { useParams } from "react-router-dom";
import LightTempForm from "../LightTempForm";
import DarkTempForm from "../DarkTempForm";


const TemplateDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Define the data for the templates
  // const lightTemplateData = {
  //   profileInfo: {
  //     name: "John Doe",
  //     info: "Web Developer with a passion for creating awesome websites.",
  //     image:  "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=", 
  //   },
  //   links: [
  //     { url: "https://github.com", label: "GitHub" },
  //     { url: "https://linkedin.com", label: "LinkedIn" },
  //   ],
  // };

  // const darkTemplateData = {
  //   profileInfo: {
  //     name: "Jane Smith",
  //     info: "Creative Designer with expertise in graphic design and UI/UX.",
  //     image: "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=", 
  //   },
  //   links: [
  //     { url: "https://dribbble.com", label: "Dribbble" },
  //     { url: "https://behance.net", label: "Behance" },
  //   ],
  // };

  // Conditional rendering based on the selected template ID
  return (
    <div className="flex justify-center items-center bg-gray-100 p-4 min-h-screen">
      <div className="  rounded-lg w-full mtext-center">
        
        
        {id === "1" && (
          <LightTempForm  />
        )}
        
        {id === "2" && (
          <DarkTempForm  />
        )}
      </div>
    </div>
  );
};

export default TemplateDetail;
