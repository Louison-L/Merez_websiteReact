/* import React from "react";*/

const Login = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        {/* Logo Section */}
        <div className="flex justify-center mb-6">
          <img
            src="/img/auca logo.jpg"
            alt=""
            className="w-32 h-32 rounded-full border-4 border-white"
          />
        </div>

        {/* Login Form */}
        <form action="login" method="post">
          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <div className="flex items-center border rounded-md overflow-hidden">
              <span className="px-3 text-gray-500">
                <i className="fas fa-user"></i>
              </span>
              <input
                type="text"
                name="userName"
                placeholder="Enter your email"
                required
                className="w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <div className="flex items-center border rounded-md overflow-hidden">
              <span className="px-3 text-gray-500">
                <i className="fas fa-key"></i>
              </span>
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                className="w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Remember Me and Forgot Password */}

          <div className="mb-4 flex justify-between items-center">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
              />
              <span className="ml-2 text-gray-600 text-sm">Remember Me</span>
            </label>
            <a href="forgot.html" className="text-blue-600 text-sm hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <div className="mb-4">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Log In
            </button>
          </div>

          {/* Signup Link */}
          <div className="text-center">
            <span className="text-gray-600 text-sm">
              Dont have an account?{" "}
              <a href="registration.html" className="text-blue-600 hover:underline">
                Sign Up
              </a>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
