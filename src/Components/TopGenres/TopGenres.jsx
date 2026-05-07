import { useEffect, useState } from "react";
import api from "../../api/axios";

const TopGenres = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    api.get("/books")
      .then((res) => setBooks(res.data))
      .catch((err) => console.error(err));
  }, []);

  const genres = [];
  const usedGenres = new Set();

  books.forEach((book) => {
    if (!usedGenres.has(book.genre) && genres.length < 4) {
      usedGenres.add(book.genre);
      genres.push(book);
    }
  });

  return (
    <section className="py-32 md:py-40 px-4 bg-gray-50 dark:bg-[#0f081c] transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="uppercase tracking-[6px] text-pink-500 dark:text-pink-400 text-sm mb-4 font-semibold">
            Explore Categories
          </p>
          <h2 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white font-playfair">
            Top <span className="text-pink-500 dark:text-pink-400 italic font-serif">Genres</span>
          </h2>
          <div className="flex justify-center items-center gap-4 mt-6">
            <div className="w-20 h-[1px] bg-pink-500/40"></div>
            <span className="text-pink-500 dark:text-pink-400 text-xl">★</span>
            <div className="w-20 h-[1px] bg-pink-500/40"></div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {genres.map((book) => (
            <div
              key={book._id}
              className="relative group rounded-[16px] overflow-hidden shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_15px_40px_-15px_rgba(0,0,0,0.5)] hover:shadow-[0_30px_60px_-15px_rgba(236,72,153,0.2)] dark:hover:shadow-[0_30px_60px_-15px_rgba(236,72,153,0.3)] hover:scale-105 transition-all duration-500 aspect-[4/5] cursor-pointer bg-gradient-to-br from-[#FF2D95] to-[#9333EA]"
            >
              {book.coverImage && (
                <img
                  src={book.coverImage}
                  alt={book.genre}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:brightness-110"
                />
              )}

              <div className="absolute bottom-0 left-0 w-full p-6 bg-black/40 dark:bg-white/10 backdrop-blur-[8px] border-t border-white/20 transition-all duration-300">
                <h3 className="text-white text-2xl font-bold text-center font-playfair tracking-wide drop-shadow-md">
                  {book.genre}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopGenres;