import { Link } from "react-router";
import React from "react";

const Banner = () => {
  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=Playfair+Display:ital,wght@0,600;0,700;0,800;1,600;1,700&display=swap');
          
          .font-playfair { font-family: 'Playfair Display', serif; }
          .font-inter { font-family: 'Inter', sans-serif; }

          @keyframes float-1 {
            0%, 100% { transform: translateY(0px) rotate(-10deg); }
            50% { transform: translateY(-10px) rotate(-10deg); }
          }
          @keyframes float-2 {
            0%, 100% { transform: translateY(0px) rotate(8deg); }
            50% { transform: translateY(-10px) rotate(8deg); }
          }
          .animate-float-1 {
            animation: float-1 4s ease-in-out infinite;
          }
          .animate-float-2 {
            animation: float-2 3.5s ease-in-out infinite;
          }
        `}
      </style>

      <section className="font-inter relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] dark:from-[#2a1b41] dark:via-[#1a0f2e] dark:to-[#0f081c] transition-colors duration-500 min-h-[90vh] flex items-center">
        <div
          className="absolute inset-0 opacity-[0.05] dark:opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236b7280' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        ></div>

        <div className="absolute top-0 left-0 w-96 h-96 bg-pink-300/40 dark:bg-pink-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-300/40 dark:bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center relative z-10 w-full py-12">
          <div className="space-y-8 text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="flex items-center gap-4">
              <span className="w-16 h-[1px] bg-gradient-to-l from-pink-500 to-transparent hidden lg:block opacity-60"></span>
              <p className="uppercase tracking-[0.5em] text-pink-600 dark:text-pink-300 font-bold text-xs md:text-sm">
                Welcome to The Book Haven
              </p>
              <span className="w-16 h-[1px] bg-gradient-to-r from-pink-500 to-transparent hidden lg:block opacity-60"></span>
            </div>

            <h1 className="font-playfair text-5xl md:text-7xl font-extrabold leading-[1.1] text-transparent bg-clip-text bg-gradient-to-br from-gray-900 via-gray-800 to-gray-500 dark:from-white dark:via-gray-200 dark:to-gray-400 pb-2">
              Read Beyond <br />
              <span
                className="text-pink-500 dark:text-pink-400 italic tracking-wide"
                style={{ textShadow: "0 0 30px rgba(236,72,153,0.4)" }}
              >
                Imagination
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-xl font-light leading-relaxed">
              Discover your next favorite book, build your personal library, and
              share meaningful stories with readers around the world.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 pt-4 w-full sm:w-auto z-20">
              <Link
                to="/all-books"
                className="px-8 py-4 bg-pink-500 text-white rounded-md font-semibold tracking-wide transition-all duration-300 shadow-lg shadow-pink-500/40 hover:shadow-xl hover:shadow-pink-500/60 hover:-translate-y-1 text-center"
              >
                All Books
              </Link>

              <Link
                to="/add-book"
                className="px-8 py-4 bg-transparent border-[1px] border-gray-400 dark:border-white/20 text-gray-900 dark:text-white rounded-md font-semibold tracking-wide transition-all duration-300 hover:bg-gray-100 dark:hover:bg-white/10 hover:-translate-y-1 text-center"
              >
                Create Book
              </Link>
            </div>
          </div>

          <div className="relative flex justify-center items-center h-[500px] mt-10 lg:mt-0">
            <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
              <div className="w-[350px] h-[350px] bg-[radial-gradient(circle,_rgba(236,72,153,0.15)_0%,_transparent_70%)] dark:bg-[radial-gradient(circle,_rgba(236,72,153,0.25)_0%,_transparent_70%)] rounded-full blur-[40px]"></div>
            </div>

            <div className="relative w-full max-w-[400px] h-full z-10">
              <div className="absolute top-10 left-4 z-20 animate-float-1">
                <img
                  src="https://images.unsplash.com/photo-1544947950-fa07a98d237f"
                  alt="Book Collection"
                  className="w-48 h-64 md:w-56 md:h-80 object-cover rounded-[20px] shadow-[20px_20px_40px_rgba(0,0,0,0.15)] dark:shadow-[20px_20px_50px_rgba(0,0,0,0.5)] border border-gray-200 dark:border-white/10 bg-white"
                />
              </div>

              <div className="absolute bottom-10 right-4 z-30 animate-float-2">
                <img
                  src="https://images.unsplash.com/photo-1512820790803-83ca734da794"
                  alt="Open Book"
                  className="w-48 h-64 md:w-56 md:h-80 object-cover rounded-[20px] shadow-[0_20px_40px_rgba(0,0,0,0.15)] dark:shadow-[0_30px_60px_rgba(0,0,0,0.6)] border border-gray-200 dark:border-white/10 bg-white"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-b from-transparent to-white dark:to-[#0f081c] z-10 pointer-events-none"></div>
      </section>
    </>
  );
};

export default Banner;
