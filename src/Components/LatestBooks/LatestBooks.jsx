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
    <section className="py-24 px-4 bg-gradient-to-b from-black via-[#120b02] to-[#1a1206] text-white">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <p className="uppercase tracking-[6px] text-yellow-500 text-sm mb-4">
            Fresh From The Shelves
          </p>
          <h2 className="text-5xl md:text-7xl font-bold">
            Latest <span className="text-yellow-500 italic font-serif">Arrivals</span>
          </h2>
          <div className="flex justify-center items-center gap-4 mt-6">
            <div className="w-20 h-[1px] bg-yellow-600"></div>
            <span className="text-yellow-500 text-xl">★</span>
            <div className="w-20 h-[1px] bg-yellow-600"></div>
          </div>
        </div>

        {activeBook && (
          <div className="relative bg-[#f8f1e4] text-black rounded-xl overflow-hidden shadow-2xl mb-20 border-l-[12px] border-yellow-600 flex flex-col md:flex-row min-h-[450px]">
            
            <div className="md:w-2/5 relative h-80 md:h-auto overflow-hidden">
              <img
                src={activeBook.coverImage}
                alt={activeBook.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              {activeBook.rating === 5 && (
                <div className="absolute top-4 left-4 bg-yellow-500 text-black text-sm font-bold rounded-full px-4 py-2 shadow-lg">
                  ★ Top Rated
                </div>
              )}
            </div>

            <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center relative">
              <p className="uppercase text-xs tracking-[4px] text-purple-700 font-bold mb-3">
                Featured {activeBook.genre}
              </p>
              <h3 className="text-4xl md:text-5xl font-extrabold leading-tight mb-2">
                {activeBook.title}
              </h3>
              <p className="text-xl italic text-gray-700 mb-6">
                by {activeBook.author}
              </p>
              
              <div className="flex items-center gap-2 mb-8">
                <p className="text-yellow-600 font-semibold text-lg tracking-widest">
                  {"★".repeat(activeBook.rating)}
                </p>
                <span className="text-gray-500 font-medium ml-2">
                  {activeBook.rating}.0
                </span>
              </div>

              <div className="mt-auto pt-8 flex items-center justify-between">
                <Link to={`/book-details/${activeBook._id}`}>
                  <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 rounded uppercase tracking-wider font-semibold transition-colors duration-300 shadow-lg cursor-pointer z-10 relative">
                    View Details
                  </button>
                </Link>
                
                <div className="flex items-center gap-3 relative z-10">
                  <button onClick={handlePrev} className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full transition-colors cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-800">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                  </button>
                  <button onClick={handleNext} className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full transition-colors cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-800">
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
                      idx === activeIndex ? "w-8 bg-yellow-600" : "w-2 bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="flex items-center gap-4 mb-8">
          <h3 className="text-2xl font-serif text-yellow-500 italic">More New Arrivals</h3>
          <div className="flex-1 h-[1px] bg-yellow-900/50"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {gridBooks.map((book) => (
            <Link
              to={`/book-details/${book._id}`}
              key={book._id}
              className="group bg-[#f8f1e4] text-black rounded-md overflow-hidden shadow-2xl hover:-translate-y-3 transition duration-500 border-l-4 border-yellow-700 flex flex-col block"
            >
              <div className="relative overflow-hidden h-72">
                <img
                  src={book.coverImage}
                  alt={book.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                {book.rating === 5 && (
                  <div className="absolute top-3 right-3 bg-yellow-500 text-black text-xs font-bold rounded-full w-10 h-10 flex items-center justify-center shadow-lg">
                    ★5
                  </div>
                )}
              </div>

              <div className="p-5 flex flex-col flex-1">
                <p className="uppercase text-[10px] tracking-[3px] text-purple-700 font-semibold mb-2">
                  {book.genre}
                </p>
                <h3 className="text-lg font-bold leading-tight mb-1">
                  {book.title}
                </h3>
                <p className="text-sm italic text-gray-700 mb-4">
                  by {book.author}
                </p>
                <div className="mt-auto">
                  <p className="text-yellow-600 font-semibold text-sm">
                    {"★".repeat(book.rating)}
                    <span className="text-gray-500 ml-2">{book.rating}.0</span>
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