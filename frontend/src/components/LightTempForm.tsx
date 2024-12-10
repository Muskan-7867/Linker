import Form from "./Form";
import LightTemplate from "./Template/LightTemplate";

const TempForm = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50  to-indigo-100 min-h-screen flex items-center justify-center p-6">
      {/* Container */}
      <div className="flex flex-col lg:flex-row gap-8 w-full max-w-screen-lg bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Left Side: LightTemplate Component */}
        <div className="flex-1 p-6 lg:p-8  bg-gray-50 flex flex-col items-center justify-center">
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

   
        <div className="flex-1 p-6 lg:p-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Get in Touch</h2>
            <p className="text-gray-600 mb-6">
              Fill out the form below.
            </p>
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TempForm;
