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

  if (!books) return <Spinner />;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">
          All Books
        </h2>

        <select
          onChange={(e) => setSortOrder(e.target.value)}
          className="select select-bordered"
        >
          <option value="">Sort By Rating</option>
          <option value="high">Highest Rating</option>
          <option value="low">Lowest Rating</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="table w-full border">
          <thead className="bg-gray-200">
            <tr>
              <th>#</th>
              <th>Book Name</th>
              <th>Author</th>
              <th>Genre</th>
              <th>Rating</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {books.map((book, index) => (
              <tr key={book._id}>
                <td>{index + 1}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.genre}</td>
                <td>⭐ {book.rating}</td>

                <td>
                  <Link to={`/book-details/${book._id}`}>
                    <button className="btn btn-sm btn-primary">
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
  );
};

export default AllBooks;