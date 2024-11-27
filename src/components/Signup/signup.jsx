/* import React from "react";*/

const Signup = () => {
  return (
    <div className="h-screen bg-cover bg-center flex justify-center items-center"
      style={{
        backgroundImage: "linear-gradient(rgba(4,9,30,0.7),rgba(4,9,30,0.7)), url('/images/gishushu.jpeg')",
      }}
    >
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <div className="text-center mb-6">
          <img
            src="/images/auca logo.jpg"
            alt="Logo"
            className="w-32 h-32 mx-auto rounded-full border-4 border-white"
          />
        </div>
        <form action="login" method="post">
          <div className="mb-4">
            <label className="block mb-1 text-gray-600">Email</label>
            <div className="flex items-center border border-gray-300 rounded">
              <span className="px-3 text-gray-500">
                <i className="fas fa-user"></i>
              </span>
              <input
                type="text"
                name="userName"
                placeholder="Email"
                className="w-full py-2 px-3 focus:outline-none"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block mb-1 text-gray-600">Password</label>
            <div className="flex items-center border border-gray-300 rounded">
              <span className="px-3 text-gray-500">
                <i className="fas fa-lock"></i>
              </span>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full py-2 px-3 focus:outline-none"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block mb-1 text-gray-600">Confirm Password</label>
            <div className="flex items-center border border-gray-300 rounded">
              <span className="px-3 text-gray-500">
                <i className="fas fa-key"></i>
              </span>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="w-full py-2 px-3 focus:outline-none"
                required
              />
            </div>
          </div>
          <div className="mt-4 text-center">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
              Signup
            </button>
          </div>
          <div className="mt-4 text-center text-sm">
            <span className="text-gray-600">
              Already have an account?{" "}
              <a href="login.html" className="text-blue-500 hover:underline">
                Log In
              </a>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
