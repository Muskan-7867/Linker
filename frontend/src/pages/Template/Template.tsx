import React from "react";
import { Link } from "react-router-dom";

const Templates: React.FC = () => {
  const templates = [
    { id: 1, name: "Template 1", image: "src/assets/lightTheme.png" },
    { id: 2, name: "Template 2", image: "src/assets/DarkTheme.png" },
    { id: 2, name: "Template 3", image: "src/assets/DarkTheme.png" },
    { id: 1, name: "Template 4", image: "src/assets/lightTheme.png" },
  ];

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <h1 className="mt-20 text-white text-2xl font-bold text-center">
        Choose your Template
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">
        {templates.map((template) => (
          <div
            key={template.id}
            className="relative group text-white p-4 rounded-lg hover:bg-gray-800 transition duration-300"
          >
            <Link to={`/templates/${template.id}`} className="flex flex-col items-center">
              {template.image && (
                <img
                  src={template.image}
                  alt={template.name}
                  className="w-full h-96 object-cover rounded-lg mb-4 shadow-lg"
                />
              )}
              <div className="text-center font-medium">{template.name}</div>
            </Link>
            {/* Create Your Linktree Button */}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300">
              <Link
                to={`/templates/${template.id}`}
                className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-lg hover:bg-blue-600 transition duration-300"
              >
               Start with this Template
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Templates;
