import React, { useState } from "react";

const Signup: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);  
   const [message, setMessage] = useState<string>('');
  const [error, setError] = useState<string>("");

  // Properly typing the event for form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Show loading state and clear previous error
    setLoading(true);
    setError("");
    setMessage('');

    try {
      const response = await fetch("http://localhost:8000/api/v1/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, username, password }),
      });

      if (!response.ok) {
        throw new Error("Error creating user");
      }

      const data = await response.json();
      console.log("User created successfully:", data);
      setMessage('Login successful!');
      
    } catch (err) {
      console.error("Error creating user:", err);
      setError("An error occurred while creating the account.");
    } finally {
      setLoading(false);  
    }
  };

  return (
    <div className="flex justify-center items-center gap-[10%] bg-gray-100 min-h-screen">
      <div className="bg-white shadow-lg p-8 rounded-lg w-full max-w-sm">
        <h2 className="mb-6 font-bold text-2xl text-blue-500 text-center">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium text-left text-gray-700 text-lg">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block border-gray-300 mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300 w-full focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="block font-medium text-left text-gray-700 text-lg">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="block border-gray-300 mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300 w-full focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block font-medium text-left text-gray-700 text-lg">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block border-gray-300 mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300 w-full focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-500 py-2 rounded-md w-full text-white transition duration-200"
            disabled={loading}  // Disable button while loading
          >
            {loading ? "Registering..." : "Register"}
          </button>
          {message && (
            <p className="mt-4 text-center text-gray-600 text-sm">{message}</p>
          )}
          {error && <p className="text-red-500 text-center mt-4">{error}</p>}  {/* Show error message */}
          <p className="mt-4 text-center text-gray-600 text-sm">
            Already have an account?{" "}
            <a href="/login" className="text-blue-600 hover:underline">
              Login
            </a>
          </p>
        </form>
      </div>
      <img
        src="src/assets/signup.png"
        alt="Signup illustration"
        width={350}
        height={350}
        className="lg:block hidden lg:w-[450px] lg:h-[450px]"
      />
    </div>
  );
};

export default Signup;