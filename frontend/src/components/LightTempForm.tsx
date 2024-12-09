
import Form from "./Form";
import LightTemplate from "./Template/LightTemplate";
const TempForm = () => {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center p-6 space-x-4"> {/* Full height and centered */}
      <div className="flex flex-col lg:flex-row gap-6 w-full max-w-screen-lg">
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

        {/* Right Side: ContactForm Component */}
        <div className="flex-1">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default TempForm;
