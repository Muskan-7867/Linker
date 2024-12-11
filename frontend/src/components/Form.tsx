import { useState } from "react";
import { FaPlus, FaInstagram, FaTwitter, FaFacebook, FaLinkedin, FaYoutube, FaPinterest, FaSnapchat, FaTiktok, FaReddit, FaWhatsapp } from "react-icons/fa";

const Form = () => {
  const [titleDropdownOpen, setTitleDropdownOpen] = useState(false);
  const [iconDropdownOpen, setIconDropdownOpen] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState("");
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [links, setLinks] = useState([{ url: "" }]);

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

  const handleAddLink = () => setLinks([...links, { url: "" }]);
  const handleLinkChange = (index, value) => {
    const updatedLinks = [...links];
    updatedLinks[index].url = value;
    setLinks(updatedLinks);
  };

  return (
    <div className="flex-1 p-4 sm:p-8 max-w-lg mx-auto bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl text-center text-white bg-blue-400 py-2 rounded-lg mb-8">Add New Link</h2>
      <form className="space-y-6">
        {/* Title Dropdown */}
        <div className="relative flex items-center">
          <FaPlus className="cursor-pointer mr-2 text-blue-500" onClick={() => setTitleDropdownOpen(!titleDropdownOpen)} />
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg text-black"
            placeholder="Enter Title"
            value={selectedTitle}
            readOnly
          />
          {titleDropdownOpen && (
            <div className="absolute top-full left-0 w-full bg-white border rounded-lg mt-1 shadow-lg z-10">
              {titles.map((title, index) => (
                <div key={index} className="px-4 py-2 cursor-pointer hover:bg-gray-100" onClick={() => { setSelectedTitle(title.name); setTitleDropdownOpen(false); }}>
                  {title.name}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Icon Dropdown */}
        <div className="relative flex items-center">
          <div className="cursor-pointer mr-2 text-blue-500" onClick={() => setIconDropdownOpen(!iconDropdownOpen)}>{selectedIcon || <FaPlus />}</div>
          <input className="w-full px-4 py-2 border rounded-lg text-black" placeholder="Select Icon" readOnly />
          {iconDropdownOpen && (
            <div className="absolute top-full left-0 w-full bg-white border rounded-lg mt-1 shadow-lg z-10">
              {titles.map((title, index) => (
                <div key={index} className="px-4 py-2 cursor-pointer flex items-center" onClick={() => { setSelectedIcon(title.icon); setIconDropdownOpen(false); }}>
                  {title.icon}
                  <span className="ml-2">{title.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Links Input */}
        {links.map((link, index) => (
          <div key={index} className="flex items-center space-x-2">
            <FaPlus className="cursor-pointer text-blue-500" onClick={handleAddLink} />
            <input
              className="w-full px-4 py-2 border rounded-lg text-black"
              placeholder="Enter link"
              value={link.url}
              onChange={(e) => handleLinkChange(index, e.target.value)}
            />
          </div>
        ))}

        {/* Submit Button */}
        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
