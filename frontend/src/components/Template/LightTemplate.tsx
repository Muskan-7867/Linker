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

 export const LightTemplate: React.FC<LightTemplateProps> = ({ profileInfo, links }) => {
  return (
    <div className="bg-white shadow-lg p-6 rounded-lg w-full max-w-screen-md text-center">
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
  );
};

const TempForm = () => {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center p-6 space-x-4"> {/* Full height and centered */}
      <div className="flex gap-6 w-full max-w-screen-lg">
        {/* Left Side: LightTemplate Component */}
        <div className="flex-1">
          <LightTemplate
            profileInfo={{
              name: "John Doe",
              info: "Web Developer from XYZ",
              image: "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=", // Replace with your image URL
            }}
            links={[
              { url: "https://www.example.com", label: "Personal Website" },
              { url: "https://www.github.com", label: "GitHub" },
              { url: "https://www.linkedin.com", label: "LinkedIn" },
            ]}
          />
        </div>

        {/* Right Side: Form Component */}
        <div className="flex-1  p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Contact Form</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Message</label>
              <textarea
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TempForm;
