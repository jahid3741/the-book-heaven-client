import { Link } from "react-router-dom";
import React from "react";
const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md shadow-lg rounded-lg p-8 bg-base-100">
        <h2 className="text-3xl font-bold text-center mb-6">Register</h2>

        <form className="space-y-4">
          {/* Name */}
          <div>
            <label className="label">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered w-full"
            />
          </div>

          {/* Email */}
          <div>
            <label className="label">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
            />
          </div>

          {/* Photo URL */}
          <div>
            <label className="label">Photo URL</label>
            <input
              type="text"
              placeholder="Enter your photo URL"
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

          {/* Register Button */}
          <button className="btn btn-primary w-full">Register</button>
        </form>

        {/* Login Link */}
        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 font-semibold">
            Login
          </Link>
        </p>

        {/* Google Register */}
        <button className="btn btn-outline w-full mt-4">
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Register;