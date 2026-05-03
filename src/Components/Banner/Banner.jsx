import { Link } from "react-router";
import React from "react";
const Banner = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-purple-900 to-indigo-900 text-white min-h-[90vh] flex items-center">
      {/* Background Glow Effects */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Side Content */}
        <div className="space-y-8 text-center lg:text-left">
          <p className="uppercase tracking-[0.3em] text-pink-300 font-semibold">
            Welcome to The Book Haven
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Read Beyond <br />
            <span className="text-pink-400">Imagination</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-xl">
            Discover your next favorite book, build your personal library, and
            share meaningful stories with readers around the world.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              to="/all-books"
              className="btn bg-pink-500 hover:bg-pink-600 border-none text-white px-8"
            >
              All Books
            </Link>

            <Link
              to="/add-book"
              className="btn btn-outline border-white text-white hover:bg-white hover:text-slate-900 px-8"
            >
              Create Book
            </Link>
          </div>
        </div>

        {/* Right Side Visual */}
        <div className="relative flex justify-center items-center">
          <div className="relative w-[350px] h-[450px]">
            {/* Book Image 1 */}
            <div className="absolute top-0 left-0 rotate-[-10deg] shadow-2xl rounded-2xl overflow-hidden animate-bounce">
              <img
                src="https://images.unsplash.com/photo-1544947950-fa07a98d237f"
                alt="Book Collection"
                className="w-52 h-72 object-cover"
              />
            </div>

            {/* Book Image 2 */}
            <div className="absolute bottom-0 right-0 rotate-[8deg] shadow-2xl rounded-2xl overflow-hidden animate-pulse">
              <img
                src="https://images.unsplash.com/photo-1512820790803-83ca734da794"
                alt="Open Book"
                className="w-52 h-72 object-cover"
              />
            </div>

            {/* Center Glow */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-40 h-40 bg-pink-400/30 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
