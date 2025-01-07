import { useState } from "react";
import {
  FaPlus,
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
  FaPinterest,
  FaSnapchat,
  FaTiktok,
  FaReddit,
  FaWhatsapp,
} from "react-icons/fa";

function LinkForm() {
  const [links, setLinks] = useState([{ title: "", icon: null, link: "" }]);
  const [titleDropdownOpen, setTitleDropdownOpen] = useState(false);
  const [iconDropdownOpen, setIconDropdownOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const titles = [
    { name: "Instagram", icon: <FaInstagram /> },
    { name: "Twitter", icon: <FaTwitter /> },
    { name: "Facebook", icon: <FaFacebook /> },
    { name: "LinkedIn", icon: <FaLinkedin /> },
    { name: "YouTube", icon: <FaYoutube /> },
    { name: "Pinterest", icon: <FaPinterest /> },
    { name: "Snapchat", icon: <FaSnapchat /> },
    { name: "TikTok", icon: <FaTiktok /> },
    { name: "Reddit", icon: <FaReddit /> },
    { name: "WhatsApp", icon: <FaWhatsapp /> },
  ];

  const handleAddLink = () => {
    setLinks([...links, { title: "", icon: null, link: "" }]);
  };

  const handleLinkChange = (
    index: number,
    key: keyof (typeof links)[0],
    value: string 
  ) => {
    const updatedLinks = [...links];
    updatedLinks[index][key] = value;
    setLinks(updatedLinks);
  };

  const handleTitleSelect = (index: number, title: string ) => {
    handleLinkChange(index, "title", title);
    setTitleDropdownOpen(false);
  };

  const handleIconSelect = (index: number, icon: JSX.Element ) => {
    const updatedLinks = [...links];
    updatedLinks[index].icon = icon;
    setLinks(updatedLinks);
    setIconDropdownOpen(false);
  };

  return (
    <div className="mt-4 p-4 max-w-lg  mx-auto bg-white rounded-lg  shadow-lg">
      <div className="max-h-96 overflow-y-auto scrollbar-hidden">
      <div className="space-y-6  ">
        {links.map((link, index) => (
          <div key={index} className="mb-4 border-b pb-4 ">
            {/* Title Dropdown */}
            <div className="relative mb-4">
              <label className="block text-sm font-bold mb-2  text-gray-700">
                Title
              </label>
              <div
                className="flex items-center cursor-pointer border border-black  rounded-lg px-3 py-2"
                onClick={() => {
                  setTitleDropdownOpen(!titleDropdownOpen);
                  setActiveIndex(index);
                }}
              >
                <span className="flex-grow ">
                  {link.title || "Select Title"}
                </span>
                <FaPlus />
              </div>
              {titleDropdownOpen && activeIndex === index && (
                <div className="absolute mt-1 w-full bg-white  rounded-lg shadow-lg z-10">
                  {titles.map((title, i) => (
                    <div
                      key={i}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleTitleSelect(index, title.name)}
                    >
                      {title.name}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Icon Dropdown */}
            <div className="relative mb-4">
              <label className="block text-sm font-bold mb-2 text-gray-700">
                Icon
              </label>
              <div
                className="flex items-center cursor-pointer  border  border-black rounded-lg px-3 py-2"
                onClick={() => {
                  setIconDropdownOpen(!iconDropdownOpen);
                  setActiveIndex(index);
                }}
              >
                <span className="flex-grow">{link.icon || "Select Icon"}</span>
                <FaPlus />
              </div>
              {iconDropdownOpen && activeIndex === index && (
                <div className="absolute mt-1 w-full bg-white border rounded-lg shadow-lg z-10">
                  {titles.map((title, i) => (
                    <div
                      key={i}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center"
                      onClick={() => handleIconSelect(index, title.icon)}
                    >
                      {title.icon}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Link Input */}
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2  text-gray-700">
                Link
              </label>
              <input
                type="text"
                className="w-full px-4 py-2  border text-black   border-black rounded-lg"
                placeholder="Enter link"
                value={link.link}
                onChange={(e) =>
                  handleLinkChange(index, "link", e.target.value)
                }
              />
            </div>
          </div>
        ))}

        <button
          type="button"
          onClick={handleAddLink}
          className="flex items-center bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          <FaPlus className="mr-2" />
          Add More Links
        </button>
      </div>
    </div>
    </div>
  );
}

export default LinkForm;
