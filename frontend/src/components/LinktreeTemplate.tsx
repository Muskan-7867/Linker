import React from "react";
import { useLocation } from "react-router-dom";
import { Trash2, Edit } from "lucide-react";

// Define Link and LocationState interfaces
interface Link {
  title: string;
  icon: string;
  link: string;
}

interface LocationState {
  links: Link[];
  treeName: string;
}

const LinktreeTemplate: React.FC = () => {
  const location = useLocation();
  const { links, treeName } = (location.state as LocationState) || {
    links: [],
    treeName: "",
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
      <div className="max-w-7xl w-full flex gap-8 mt-40">
        {/* Sidebar for Editing */}
        <div className="w-1/3 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Edit Links</h2>
          {links.length === 0 ? (
            <p className="text-gray-500">No links available to edit.</p>
          ) : (
            <div className="space-y-4">
              {links.map((link, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-gray-100 p-3 rounded-lg"
                >
                  <div>
                    <p className="text-lg font-semibold text-gray-700">
                      {link.title}
                    </p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button className="text-blue-600 hover:text-blue-800">
                      <Edit className="h-5 w-5" />
                    </button>
                    <button className="text-red-600 hover:text-red-800">
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Preview Section */}
        <div className="w-2/3 bg-white shadow-md rounded-lg p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            {treeName || "Linktree Preview"}
          </h1>
          {links.length === 0 ? (
            <p className="text-gray-500">No links to display.</p>
          ) : (
            <div className="space-y-4">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-blue-50 hover:bg-blue-100 p-4 rounded-lg transition-colors duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <span className="text-lg font-semibold text-blue-600">
                      {link.title}
                    </span>
                    <span className="ml-auto text-sm text-gray-500">
                      {link.link}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LinktreeTemplate;
