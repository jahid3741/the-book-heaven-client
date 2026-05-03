import { Link } from "react-router";
import React from "react";
const Banner = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-700 text-white min-h-[90vh] flex items-center">
      {/* Animated Background Blur Circles */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-pink-500 opacity-20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-400 opacity-20 rounded-full blur-3xl animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-8 text-center lg:text-left">
          <p className="uppercase tracking-[0.3em] text-pink-300 font-semibold">
            Your Digital Library Universe
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Discover, Create & <br />
            <span className="text-pink-300">Preserve Stories</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-200 max-w-xl">
            The Book Haven is more than a library — it’s a creative sanctuary
            where readers and writers connect through books, genres, and
            imagination.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              to="/all-books"
              className="btn bg-pink-500 hover:bg-pink-600 border-none text-white px-8"
            >
              Explore All Books
            </Link>

            <Link
              to="/add-book"
              className="btn btn-outline border-white text-white hover:bg-white hover:text-indigo-900 px-8"
            >
              Create Your Book
            </Link>
          </div>
        </div>

        {/* Right Creative Visual */}
        <div className="relative flex justify-center">
          <div className="relative w-[320px] h-[420px] md:w-[400px] md:h-[500px]">
            {/* Floating Book Card 1 */}
            <div className="absolute top-0 left-0 rotate-[-12deg] bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-6 w-56 h-72 animate-bounce">
              <img
                src="https://i.ibb.co/6P6Y4kQ/book1.jpg"
                alt="Book"
                className="rounded-2xl w-full h-full object-cover"
              />
            </div>

            {/* Floating Book Card 2 */}
            <div className="absolute bottom-0 right-0 rotate-[10deg] bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-6 w-56 h-72 animate-pulse">
              <img
                src="https://i.ibb.co/J2v0K7j/book2.jpg"
                alt="Book"
                className="rounded-2xl w-full h-full object-cover"
              />
            </div>

            {/* Center Glow */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-40 h-40 bg-pink-400 opacity-30 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
