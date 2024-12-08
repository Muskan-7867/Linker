
import React, { useState } from 'react';

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="flex justify-center items-center gap-[10%] bg-gray-100 min-h-screen">
      <div className="bg-white shadow-lg p-8 rounded-lg w-full max-w-sm">
        <h2 className="mb-6 font-bold text-2xl text-blue-500 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block font-medium text-left text-gray-700 text-lg">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="block border-gray-300  mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300 w-full focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block font-medium text-left text-gray-700 text-lg">Password</label>
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
          <button type="submit" className="bg-blue-600 hover:bg-blue-500 py-2 rounded-md w-full text-white transition duration-200">
            Login
          </button>
          <p className="mt-4 text-center text-gray-600 text-sm">
            Don't have an account? <a href="/signup" className="text-blue-600 hover:underline">Register</a>
          </p>
        </form>
      </div>
      <img
        src='src/assets/login.png'
        alt="Login illustration"
        width={350}
        height={350}
        className="lg:block hidden lg:w-[450px] lg:h-[450px]"
      />
    </div>
  );
};

export default Login;
