interface Link {
  title: string;
  icon: JSX.Element | null;
  link: string;
}

interface ProfileInfo {
  name: string;
  info: string;
  image: string;
}

interface LightTemplateProps {
  profileInfo: ProfileInfo;
  links: Link[];
}

const LightTemplate: React.FC<LightTemplateProps> = ({ profileInfo, links }) => {
  return (
    <div className="text-center p-6 bg-gray-100 text-gray-800 rounded-lg shadow-lg">
      {/* Profile Info */}
      <div className="mb-6">
        <img
          src={profileInfo.image}
          alt={profileInfo.name}
          className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-gray-300 shadow-md"
        />
        <h1 className="text-xl font-bold">{profileInfo.name}</h1>
        <p className="text-gray-600">{profileInfo.info}</p>
      </div>

      {/* Links */}
      <div className="space-y-4">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-gray-200 hover:bg-gray-300 text-center py-3 rounded-lg text-gray-800 font-medium shadow transition duration-200"
          >
            {link.icon} {link.title || "Untitled Link"}
          </a>
        ))}
      </div>
    </div>
  );
};

export default LightTemplate;
