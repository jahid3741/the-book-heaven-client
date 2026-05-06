import { useEffect, useState } from "react";
import { Link } from "react-router";
import api from "../../api/axios";
import Spinner from "../../Components/Spinner/Spinner";

const AllBooks = () => {
  const [books, setBooks] = useState(null);
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    api.get("/books").then((res) => {
      let data = [...res.data];

      if (sortOrder === "high") {
        data.sort((a, b) => b.rating - a.rating);
      }

      if (sortOrder === "low") {
        data.sort((a, b) => a.rating - b.rating);
      }

      setBooks(data);
    });
  }, [sortOrder]);

  if (!books) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-[#0f081c] flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 bg-gray-50 dark:bg-[#0f081c] transition-colors duration-500 relative overflow-hidden font-inter">
      <div className="absolute top-20 left-10 w-72 h-72 bg-pink-400/20 dark:bg-pink-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-400/20 dark:bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[5px] text-pink-500 dark:text-pink-400 text-xs font-bold mb-3">
            Browse the Library
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white font-playfair">
            All{" "}
            <span className="text-pink-500 dark:text-pink-400 italic">
              Books
            </span>
          </h2>
          <div className="flex justify-center items-center gap-4 mt-6">
            <div className="w-16 h-[1px] bg-pink-500/40"></div>
            <span className="text-pink-500 dark:text-pink-400 text-lg">★</span>
            <div className="w-16 h-[1px] bg-pink-500/40"></div>
          </div>
        </div>

        <div className="flex justify-end items-center mb-8">
          <select
            onChange={(e) => setSortOrder(e.target.value)}
            className="px-5 py-3 rounded-xl bg-white dark:bg-[#1a0f2e] border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500/50 shadow-sm text-sm cursor-pointer transition-all duration-300"
          >
            <option value="">Sort By Rating</option>
            <option value="high">Highest Rating</option>
            <option value="low">Lowest Rating</option>
          </select>
        </div>

        <div className="bg-white dark:bg-[#1a0f2e] rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] dark:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] border border-gray-100 dark:border-white/10 overflow-hidden backdrop-blur-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50/80 dark:bg-white/5 border-b border-gray-100 dark:border-white/10 text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wider">
                  <th className="px-6 py-5 font-semibold">#</th>
                  <th className="px-6 py-5 font-semibold">Book Name</th>
                  <th className="px-6 py-5 font-semibold">Author</th>
                  <th className="px-6 py-5 font-semibold">Genre</th>
                  <th className="px-6 py-5 font-semibold">Rating</th>
                  <th className="px-6 py-5 font-semibold text-center">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-white/10">
                {books.map((book, index) => (
                  <tr
                    key={book._id}
                    className="hover:bg-gray-50/50 dark:hover:bg-white/[0.02] transition-colors duration-300"
                  >
                    <td className="px-6 py-4 text-gray-500 dark:text-gray-400 text-sm">
                      {index + 1}
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                      {book.title}
                    </td>
                    <td className="px-6 py-4 text-gray-600 dark:text-gray-300 text-sm italic">
                      {book.author}
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 text-xs font-semibold tracking-wide">
                        {book.genre}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1">
                        <span className="text-pink-500 dark:text-pink-400 text-sm">
                          ★
                        </span>
                        <span className="font-semibold text-gray-700 dark:text-gray-300 text-sm">
                          {book.rating}.0
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Link to={`/book-details/${book._id}`}>
                        <button className="bg-pink-500 hover:bg-pink-600 text-white px-5 py-2.5 rounded-lg text-xs tracking-wider uppercase font-bold transition-all duration-300 shadow-md shadow-pink-500/20 hover:shadow-lg hover:shadow-pink-500/40 hover:-translate-y-0.5">
                          View Details
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBooks;
