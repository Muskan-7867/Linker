import React from "react";
import { useParams } from "react-router-dom";
import LightTemplate from "./LightTemplate"; 
import DarkTemplate from "./DarkTemplate";   

const TemplateDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Define the data for the templates
  const lightTemplateData = {
    profileInfo: {
      name: "John Doe",
      info: "Web Developer with a passion for creating awesome websites.",
      image: "https://via.placeholder.com/150", // Example placeholder image URL
    },
    links: [
      { url: "https://github.com", label: "GitHub" },
      { url: "https://linkedin.com", label: "LinkedIn" },
    ],
  };

  const darkTemplateData = {
    profileInfo: {
      name: "Jane Smith",
      info: "Creative Designer with expertise in graphic design and UI/UX.",
      image: "https://via.placeholder.com/150", // Example placeholder image URL
    },
    links: [
      { url: "https://dribbble.com", label: "Dribbble" },
      { url: "https://behance.net", label: "Behance" },
    ],
  };

  // Conditional rendering based on the selected template ID
  return (
    <div className="flex justify-center items-center bg-gray-100 p-4 min-h-screen">
      <div className="bg-white shadow-lg p-6 rounded-lg w-full max-w-screen-md text-center">
        
        
        {id === "1" && (
          <LightTemplate profileInfo={lightTemplateData.profileInfo} links={lightTemplateData.links} />
        )}
        
        {id === "2" && (
          <DarkTemplate profileInfo={darkTemplateData.profileInfo} links={darkTemplateData.links} />
        )}
      </div>
    </div>
  );
};

export default TemplateDetail;
