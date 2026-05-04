import { useEffect, useState } from "react";
import { getLatestBooks } from "../../Api/BooksApi";

const TopGenres = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getLatestBooks()
      .then((data) => setBooks(data))
      .catch((err) => console.error(err));
  }, []);

  // Pick unique genres
  const genres = [];
  const usedGenres = new Set();

  books.forEach((book) => {
    if (!usedGenres.has(book.genre) && genres.length < 4) {
      usedGenres.add(book.genre);
      genres.push(book);
    }
  });

  return (
    <section className="py-24 px-4 bg-slate-100">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="uppercase tracking-[5px] text-purple-600 text-sm mb-3">
            Explore Categories
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Top Genres
          </h2>
        </div>

        {/* Genre Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {genres.map((book) => (
            <div
              key={book._id}
              className="relative rounded-3xl overflow-hidden group shadow-xl hover:-translate-y-3 transition duration-500"
            >
              <img
                src={book.coverImage}
                alt={book.genre}
                className="w-full h-96 object-cover group-hover:scale-110 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold text-center px-2">
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