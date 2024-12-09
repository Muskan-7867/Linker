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
    <div className="flex justify-center items-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 min-h-full p-4">
      <div className="bg-black bg-opacity-70 shadow-lg p-8 rounded-lg w-full max-w-screen-md text-center">
        <img
          src={profileInfo.image}
          alt={profileInfo.name}
          className="border-4 border-pink-500 mx-auto mb-4 rounded-full w-28 h-28"
        />
        <h1 className="mb-2 font-bold text-3xl text-white">{profileInfo.name}</h1>
        <p className="mb-6 text-pink-300">{profileInfo.info}</p>
        <div>
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-pink-500 hover:bg-pink-600 mb-3 py-3 rounded-full w-full text-white transform transition hover:scale-105"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DarkTemplate;
