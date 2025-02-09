import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

import TitleDropdown from "../dropdowns/titledropdown";
import IconDropdown from "../dropdowns/icondropdown";
import { handleCreateLinktree } from "../../services/linktreeservices";

interface Link {
  title: string;
  icon: string;
  link: string;
}

interface FormProps {
  links: Link[];
  setLinks: React.Dispatch<React.SetStateAction<Link[]>>;
}

const Form: React.FC<FormProps> = ({ links, setLinks }) => {
  const [treeName, setTreeName] = useState<string>("");
  // const navigate = useNavigate();

  const handleAddLink = () => {
    setLinks([...links, { title: "", icon: "", link: "" }]);
  };

  const handleLinkChange = (
    index: number,
    key: keyof Link,
    value: string
  ) => {
    const updatedLinks = [...links];
    updatedLinks[index][key] = value;
    setLinks(updatedLinks);
  };

  const handleCreateLinktreeClick = async () => {
    if (!treeName) {
      alert("Please enter a name for your Linktree.");
      return;
    }
  
    await handleCreateLinktree(treeName, links);
  };
  

  return (
    <div className="mt-4 p-4 max-w-lg mx-auto bg-white rounded-lg">
      <div className="space-y-6">
        {/* Tree Name Input */}
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2 text-gray-700">Tree Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 border text-black border-black rounded-lg"
            placeholder="Enter your Linktree name"
            value={treeName}
            onChange={(e) => setTreeName(e.target.value)}
          />
        </div>

        {/* Links Input */}
        {links.map((link, index) => (
          <div key={index} className="mb-4 border-b pb-4">
            {/* Title Dropdown */}
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2 text-gray-700">Title</label>
              <TitleDropdown
                selectedTitle={link.title}
                onTitleSelect={(title) => handleLinkChange(index, "title", title)}
              />
            </div>

            {/* Icon Dropdown */}
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2 text-gray-700">Icon</label>
              <IconDropdown
                selectedIcon={link.icon}
                onIconSelect={(icon) => handleLinkChange(index, "icon", icon)}
              />
            </div>

            {/* Link Input */}
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2 text-gray-700">Link</label>
              <input
                type="text"
                className="w-full px-4 py-2 border text-black border-black rounded-lg"
                placeholder="Enter link"
                value={link.link}
                onChange={(e) => handleLinkChange(index, "link", e.target.value)}
              />
            </div>
          </div>
        ))}

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <button
            type="button"
            onClick={handleAddLink}
            className="flex items-center justify-center bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full md:w-auto"
          >
            Add More Links
          </button>

          <button
            type="button"
            onClick={handleCreateLinktreeClick}
            className="flex items-center justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full md:w-auto"
          >
            Create Linktree
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
