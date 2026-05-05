import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3000/books/${id}`)
      .then((res) => res.json())
      .then((data) => setBook(data));
  }, [id]);

  if (!book) {
    return (
      <div className="flex flex-col justify-center items-center h-screen gap-3">
        <span className="loading loading-spinner loading-lg text-primary"></span>
        <p>Loading book details...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 py-10 px-4">
      <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-3xl grid md:grid-cols-2 overflow-hidden">
        {/* Left side - Image */}
        <div className="flex items-center justify-center bg-gray-50 p-8">
          <img
            src={book.coverImage}
            alt={book.title}
            className="w-72 h-[420px] object-cover rounded-xl shadow-lg hover:scale-105 transition"
          />
        </div>

        {/* Right side - Info */}
        <div className="p-8 space-y-4">
          <p className="text-sm uppercase text-purple-500 tracking-widest">
            {book.genre}
          </p>

          <h1 className="text-4xl font-bold">{book.title}</h1>

          <p className="text-lg text-gray-600">
            by <span className="font-semibold">{book.author}</span>
          </p>

          <p className="text-yellow-500 font-bold text-lg">
            ⭐ {book.rating}/5
          </p>

          <p className="text-gray-700 leading-relaxed mt-4">{book.summary}</p>

          <div className="flex gap-4 mt-6">
            <button onClick={() => navigate(-1)} className="btn btn-outline">
              ← Back
            </button>

            <button className="btn btn-primary">Add to Favorites</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
