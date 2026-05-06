import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getLatestBooks } from "../../Api/BooksApi";

const LatestBooks = () => {
  const [books, setBooks] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    getLatestBooks()
      .then((data) => setBooks(data.slice(0, 7)))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (books.length === 0) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % Math.min(3, books.length));
    }, 5000);
    return () => clearInterval(interval);
  }, [books]);

  if (books.length === 0) return null;

  const carouselBooks = books.slice(0, 3);
  const gridBooks = books.slice(3);
  const activeBook = carouselBooks[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? carouselBooks.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % carouselBooks.length);
  };

  return (
    // Increased vertical padding (py-32 md:py-40) to give the content "room to breathe"
    <section className="py-32 md:py-40 px-4 bg-white dark:bg-[#0f081c] text-gray-900 dark:text-white transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-20">
          <p className="uppercase tracking-[6px] text-pink-500 dark:text-pink-400 text-sm mb-4 font-semibold">
            Fresh From The Shelves
          </p>
          <h2 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white font-playfair">
            Latest <span className="text-pink-500 dark:text-pink-400 italic font-serif">Arrivals</span>
          </h2>
          <div className="flex justify-center items-center gap-4 mt-6">
            <div className="w-20 h-[1px] bg-pink-500/40"></div>
            <span className="text-pink-500 dark:text-pink-400 text-xl">★</span>
            <div className="w-20 h-[1px] bg-pink-500/40"></div>
          </div>
        </div>

        {activeBook && (
          // Removed borders, added soft high-spread shadow, and scale effect
          <div className="relative bg-purple-50/30 dark:bg-[#1a0f2e]/80 text-gray-900 dark:text-white rounded-2xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] dark:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] hover:shadow-[0_30px_70px_-15px_rgba(236,72,153,0.15)] hover:scale-[1.02] transition-all duration-500 mb-24 flex flex-col md:flex-row min-h-[450px]">
            
            <div className="md:w-2/5 relative h-80 md:h-auto overflow-hidden">
              <img
                src={activeBook.coverImage}
                alt={activeBook.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              {activeBook.rating === 5 && (
                <div className="absolute top-4 left-4 bg-pink-500 text-white text-sm font-bold rounded-full px-4 py-2 shadow-lg shadow-pink-500/40">
                  ★ Top Rated
                </div>
              )}
            </div>

            <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center relative">
              <p className="uppercase text-xs tracking-[4px] text-purple-600 dark:text-purple-400 font-bold mb-3">
                Featured {activeBook.genre}
              </p>
              <h3 className="text-4xl md:text-5xl font-extrabold leading-tight mb-2 font-playfair">
                {activeBook.title}
              </h3>
              <p className="text-xl italic text-gray-600 dark:text-gray-400 mb-6">
                by {activeBook.author}
              </p>
              
              <div className="flex items-center gap-2 mb-8">
                {/* Changed star color to Pink */}
                <p className="text-pink-500 dark:text-pink-400 font-semibold text-lg tracking-widest">
                  {"★".repeat(activeBook.rating)}
                </p>
                <span className="text-gray-500 dark:text-gray-400 font-medium ml-2">
                  {activeBook.rating}.0
                </span>
              </div>

              <div className="mt-auto pt-8 flex items-center justify-between">
                <Link to={`/book-details/${activeBook._id}`}>
                  {/* Kept Pink accent consistently for buttons */}
                  <button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded uppercase tracking-wider font-semibold transition-colors duration-300 shadow-lg shadow-pink-500/30 cursor-pointer z-10 relative">
                    View Details
                  </button>
                </Link>
                
                <div className="flex items-center gap-3 relative z-10">
                  <button onClick={handlePrev} className="p-2 bg-white dark:bg-white/10 shadow-sm border border-gray-100 dark:border-transparent hover:bg-gray-50 dark:hover:bg-white/20 rounded-full transition-colors cursor-pointer text-gray-800 dark:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                  </button>
                  <button onClick={handleNext} className="p-2 bg-white dark:bg-white/10 shadow-sm border border-gray-100 dark:border-transparent hover:bg-gray-50 dark:hover:bg-white/20 rounded-full transition-colors cursor-pointer text-gray-800 dark:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {carouselBooks.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${
                      idx === activeIndex ? "w-8 bg-pink-500" : "w-2 bg-gray-300 dark:bg-gray-600"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="flex items-center gap-4 mb-10">
          <h3 className="text-3xl font-playfair text-gray-900 dark:text-white font-bold">More New Arrivals</h3>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-pink-500/40 to-transparent"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {gridBooks.map((book) => (
            <Link
              to={`/book-details/${book._id}`}
              key={book._id}
              // Removed border, added scale-105 and very soft shadows
              className="group bg-white dark:bg-[#1a0f2e] text-gray-900 dark:text-white rounded-xl overflow-hidden shadow-[0_15px_40px_-15px_rgba(0,0,0,0.08)] dark:shadow-[0_15px_40px_-15px_rgba(0,0,0,0.6)] hover:shadow-[0_30px_60px_-15px_rgba(236,72,153,0.15)] dark:hover:shadow-[0_30px_60px_-15px_rgba(236,72,153,0.25)] hover:-translate-y-2 hover:scale-105 transition-all duration-500 flex flex-col block"
            >
              <div className="relative overflow-hidden h-72">
                <img
                  src={book.coverImage}
                  alt={book.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
                {book.rating === 5 && (
                  <div className="absolute top-4 right-4 bg-pink-500 text-white text-xs font-bold rounded-full w-10 h-10 flex items-center justify-center shadow-lg shadow-pink-500/40">
                    ★5
                  </div>
                )}
              </div>

              <div className="p-6 flex flex-col flex-1">
                <p className="uppercase text-[10px] tracking-[3px] text-purple-600 dark:text-purple-400 font-bold mb-2">
                  {book.genre}
                </p>
                <h3 className="text-xl font-bold leading-tight mb-2 font-playfair">
                  {book.title}
                </h3>
                <p className="text-sm italic text-gray-500 dark:text-gray-400 mb-5">
                  by {book.author}
                </p>
                <div className="mt-auto">
                  {/* Consistently used Pink accent color for rating */}
                  <p className="text-pink-500 dark:text-pink-400 font-semibold text-sm">
                    {"★".repeat(book.rating)}
                    <span className="text-gray-400 dark:text-gray-500 ml-2">{book.rating}.0</span>
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LatestBooks;