import { useEffect, useState } from "react";
import { getLatestBooks } from "../../Api/BooksApi";

const LatestBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getLatestBooks()
      .then((data) => setBooks(data.slice(0, 6)))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-black via-[#120b02] to-[#1a1206] text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[6px] text-yellow-500 text-sm mb-4">
            Fresh From The Shelves
          </p>

          <h2 className="text-5xl md:text-7xl font-bold">
            Latest{" "}
            <span className="text-yellow-500 italic font-serif">
              Arrivals
            </span>
          </h2>

          <div className="flex justify-center items-center gap-4 mt-6">
            <div className="w-20 h-[1px] bg-yellow-600"></div>
            <span className="text-yellow-500 text-xl">★</span>
            <div className="w-20 h-[1px] bg-yellow-600"></div>
          </div>
        </div>

        {/* Book Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {books.map((book) => (
            <div
              key={book._id}
              className="group bg-[#f8f1e4] text-black rounded-md overflow-hidden shadow-2xl hover:-translate-y-4 transition duration-500 border-l-4 border-yellow-700"
            >
              {/* Cover */}
              <div className="relative overflow-hidden">
                <img
                  src={book.coverImage}
                  alt={book.title}
                  className="w-full h-80 object-cover group-hover:scale-105 transition duration-500"
                />

                {/* Rating Badge */}
                {book.rating === 5 && (
                  <div className="absolute top-3 right-3 bg-yellow-500 text-black text-xs font-bold rounded-full w-10 h-10 flex items-center justify-center shadow-lg">
                    ★5
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-4">
                <p className="uppercase text-[10px] tracking-[3px] text-purple-700 font-semibold mb-2">
                  {book.genre}
                </p>

                <h3 className="text-lg font-bold leading-tight mb-1">
                  {book.title}
                </h3>

                <p className="text-sm italic text-gray-700 mb-3">
                  by {book.author}
                </p>

                <p className="text-yellow-600 font-semibold text-sm">
                  {"★".repeat(book.rating)}
                  <span className="text-gray-500 ml-2">
                    {book.rating}.0
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestBooks;