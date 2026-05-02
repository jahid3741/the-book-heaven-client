import { Link } from "react-router-dom";
import React from "react";
const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md shadow-lg rounded-lg p-8 bg-base-100">
        <h2 className="text-3xl font-bold text-center mb-6">Login</h2>

        <form className="space-y-4">
          {/* Email */}
          <div>
            <label className="label">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
            />
          </div>

          {/* Password */}
          <div>
            <label className="label">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"
            />
          </div>

          {/* Forget Password */}
          <p className="text-sm text-right text-blue-500 cursor-pointer">
            Forgot Password?
          </p>

          {/* Login Button */}
          <button className="btn btn-primary w-full">Login</button>
        </form>

        {/* Register Link */}
        <p className="text-center mt-4">
          Don’t have an account?{" "}
          <Link to="/register" className="text-blue-500 font-semibold">
            Register
          </Link>
        </p>

        {/* Google Login */}
        <button className="btn btn-outline w-full mt-4">
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
