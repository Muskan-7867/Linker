import React from "react";

interface LinkCardProps {
  url: string;
  label: string;
}

interface ProfileSectionProps {
  name: string;
  info: string;
  image: string;
}

interface DarkTemplateProps {
  profileInfo: ProfileSectionProps;
  links: LinkCardProps[];
}

const DarkTemplate: React.FC<DarkTemplateProps> = ({ profileInfo, links }) => {
  return (
    <div className="bg-gray-900 shadow-lg rounded-xl p-6 w-80 max-w-sm border border-gray-800">
      {/* Profile Section */}
      <div className="text-center mb-6">
        <img
          src={profileInfo.image}
          alt={profileInfo.name}
          className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-purple-500 shadow-md"
        />
        <h1 className="text-2xl font-bold text-white">{profileInfo.name}</h1>
        <p className="text-gray-400 text-sm">{profileInfo.info}</p>
      </div>

      {/* Links Section */}
      <div className="space-y-4">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-purple-600 hover:bg-purple-700 text-white text-center py-2 rounded-[25px] font-medium transition duration-200 shadow-md"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Social Icons Section */}
      <div className="flex justify-center mt-6 space-x-3">
        {/* Replace src attributes with actual icon paths */}
        <a
          href="#"
          className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center shadow transition"
        >
          <img src="/path/to/icon1.svg" alt="Icon 1" className="w-5 h-5" />
        </a>
        <a
          href="#"
          className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center shadow transition"
        >
          <img src="/path/to/icon2.svg" alt="Icon 2" className="w-5 h-5" />
        </a>
        <a
          href="#"
          className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center shadow transition"
        >
          <img src="/path/to/icon3.svg" alt="Icon 3" className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
};

export default DarkTemplate;
