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
    <div className="flex justify-center items-center bg-gradient-to-r from-gray-500 via-black to-gray-600 min-h-96 p-4">
    <div className=" shadow-lg bg-opacity-70 bg-gray-300  p-8 rounded-lg w-full max-w-screen-md text-center">
      <img
        src={profileInfo.image}
        alt={profileInfo.name}
        className="mx-auto mb-4 rounded-full w-24 h-24"
      />
      <h1 className="mb-2 font-semibold text-2xl">{profileInfo.name}</h1>
      <p className="mb-6 text-gray-600">{profileInfo.info}</p>
      <div>
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-blue-500 hover:bg-blue-600 mb-3 py-3 rounded-lg w-full text-white transition"
          >
            {link.label}
          </a>
        ))}
      </div>
      </div>
    </div>
  );
};



export default LightTemplate;
