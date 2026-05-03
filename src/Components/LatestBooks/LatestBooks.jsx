import { useEffect, useState } from "react";
import { getLatestBooks } from "../../Api/BooksApi";

const LatestBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getLatestBooks()
      .then((data) => {
        console.log("Fetched Books:", data);
        setBooks(data.slice(0, 6));
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
      });
  }, []);

  return (
    <section className="py-16 px-4">
      <h2 className="text-4xl font-bold text-center mb-10">
        Latest Books Added
      </h2>

      {books.length === 0 ? (
        <p className="text-center text-gray-500">No books available.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book) => (
            <div
              key={book._id}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <img
                src={book.coverImage}
                alt={book.title}
                className="w-full h-30 object-cover"
              />

              <div className="p-4">
                <h3 className="text-xl font-bold">{book.title}</h3>
                <p>Author: {book.author}</p>
                <p>Genre: {book.genre}</p>
                <p>⭐ {book.rating}/5</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default LatestBooks;
