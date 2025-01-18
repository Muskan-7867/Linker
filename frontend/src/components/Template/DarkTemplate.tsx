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

interface DarkTemplateProps {
  profileInfo: ProfileInfo;
  links: Link[];
}

const DarkTemplate: React.FC<DarkTemplateProps> = ({ profileInfo, links }) => {
  return (
    <div className="text-center p-6 bg-gray-800 text-white rounded-lg shadow-lg">
      {/* Profile Info */}
      <div className="mb-6">
        <img
          src={profileInfo.image}
          alt={profileInfo.name}
          className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-gray-700 shadow-md"
        />
        <h1 className="text-xl font-bold">{profileInfo.name}</h1>
        <p className="text-gray-400">{profileInfo.info}</p>
      </div>

      {/* Links */}
      <div className="space-y-4">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-gray-700 hover:bg-gray-600 text-center py-3 rounded-lg text-white font-medium shadow transition duration-200"
          >
            {link.icon} {link.title || "Untitled Link"}
          </a>
        ))}
      </div>
    </div>
  );
};

export default DarkTemplate;
