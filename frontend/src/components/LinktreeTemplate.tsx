import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Trash2, Edit } from "lucide-react";
import { editLinktree } from "../services/editlinktree";

interface Link {
  title: string;
  icon: string;
  link: string;
}

interface LocationState {
  id: string;
  links: Link[];
  treeName: string;
}

const LinktreeTemplate: React.FC = () => {
  const location = useLocation();
  const { id, links, treeName } = (location.state as LocationState) || {
    id: "",
    links: [],
    treeName: "",
  };

  const [updatedLinks, setUpdatedLinks] = useState(links);
  const [updatedTreeName, setUpdatedTreeName] = useState(treeName);

  // Handles editing a specific link
  const handleEditLink = (index: number, field: keyof Link, value: string) => {
    const newLinks = [...updatedLinks];
    newLinks[index][field] = value;
    setUpdatedLinks(newLinks);
  };

  // Handles saving changes
  const handleSaveChanges = async () => {
    try {
      const result = await editLinktree(id, updatedTreeName, updatedLinks);
      console.log("Linktree updated:", result);
  
     
      setUpdatedTreeName(result.treeName);
      setUpdatedLinks(result.links);
  
      alert("Linktree updated successfully!");
    } catch (error) {
      console.error("Error updating Linktree:", error);
      alert("Failed to update Linktree. Please try again.");
    }
  };
  

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
      <div className="max-w-7xl w-full flex gap-8 mt-40">
        {/* Sidebar for Editing */}
        <div className="w-1/3 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Edit Links</h2>
          <div className="mb-4">
            <label htmlFor="treeName" className="block text-sm font-semibold text-gray-700">
              Tree Name:
            </label>
            <input
              type="text"
              id="treeName"
              value={updatedTreeName}
              onChange={(e) => setUpdatedTreeName(e.target.value)}
              className="w-full mt-2 px-4 py-2 border rounded-lg"
            />
          </div>
          {updatedLinks.length === 0 ? (
            <p className="text-gray-500">No links available to edit.</p>
          ) : (
            <div className="space-y-4">
              {updatedLinks.map((link, index) => (
                <div
                  key={index}
                  className="flex flex-col bg-gray-100 p-3 rounded-lg space-y-2"
                >
                  <input
                    type="text"
                    value={link.title}
                    onChange={(e) => handleEditLink(index, "title", e.target.value)}
                    placeholder="Link Title"
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                  <input
                    type="text"
                    value={link.link}
                    onChange={(e) => handleEditLink(index, "link", e.target.value)}
                    placeholder="Link URL"
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                  <input
                    type="text"
                    value={link.icon}
                    onChange={(e) => handleEditLink(index, "icon", e.target.value)}
                    placeholder="Icon URL"
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                  <button
                    className="text-red-600 hover:text-red-800 self-end"
                    onClick={() => {
                      const newLinks = updatedLinks.filter((_, i) => i !== index);
                      setUpdatedLinks(newLinks);
                    }}
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Preview Section */}
        <div className="w-2/3 bg-white shadow-md rounded-lg p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            {updatedTreeName || "Linktree Preview"}
          </h1>
          {updatedLinks.length === 0 ? (
            <p className="text-gray-500">No links to display.</p>
          ) : (
            <div className="space-y-4">
              {updatedLinks.map((link, index) => (
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

      {/* Save Changes Button */}
      <button
        onClick={handleSaveChanges}
        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg"
      >
        Save Changes
      </button>
    </div>
  );
};

export default LinktreeTemplate;
