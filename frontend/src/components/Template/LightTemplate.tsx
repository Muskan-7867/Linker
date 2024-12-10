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

interface LightTemplateProps {
  profileInfo: ProfileSectionProps;
  links: LinkCardProps[];
}

const LightTemplate: React.FC<LightTemplateProps> = ({ profileInfo, links }) => {
  return (
<>
      {/* Card Container */}
      <div className="bg-gradient-to-b from-gray-800 to-gray-900 text-white rounded-3xl shadow-lg p-6 w-72 max-w-sm">
        {/* Profile Section */}
        <div className="flex flex-col items-center">
          <img
            src={profileInfo.image}
            alt={profileInfo.name}
            className="w-20 h-20 rounded-full mb-4 border-4 border-gray-700 shadow-md"
          />
          <h1 className="text-xl font-bold">{profileInfo.name}</h1>
          <p className="text-gray-400 text-sm mb-6">{profileInfo.info}</p>
        </div>

        {/* Links Section */}
        <div className="space-y-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-gray-700 hover:bg-gray-600 text-center py-3 rounded-lg text-white font-medium shadow transition duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Icon Section */}
        <div className="flex justify-center mt-6 space-x-4">
          <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition">
            {/* Replace with actual icons */}
            <img src="/path/to/icon1.svg" alt="icon1" className="w-5 h-5" />
          </div>
          <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition">
            <img src="/path/to/icon2.svg" alt="icon2" className="w-5 h-5" />
          </div>
          <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition">
            <img src="/path/to/icon3.svg" alt="icon3" className="w-5 h-5" />
          </div>
        </div>
      </div>
      </>
  );
};

export default LightTemplate;
