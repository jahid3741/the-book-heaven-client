import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { Link } from "react-router";
import api from "../../api/axios";

import toast from "react-hot-toast";
import Spinner from "../../Components/Spinner/Spinner";

const MyBooks = () => {
  const { user } = useContext(AuthContext);
  const [books, setBooks] = useState(null);

  useEffect(() => {
    if (user?.email) {
      api
        .get(`/my-books?email=${user.email}`)
        .then((res) => setBooks(res.data));
    }
  }, [user]);

  const handleDelete = (id) => {
    api.delete(`/books/${id}`).then(() => {
      toast.success("Book deleted");

      setBooks((prev) => prev.filter((book) => book._id !== id));
    });
  };
  if (!books) return <Spinner />;

  return (
    <div className="p-6">
      <h2 className="text-3xl text-center mb-6">My Books</h2>

      <div className="overflow-x-auto">
        <table className="table w-full border">
          <thead className="bg-gray-200">
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Author</th>
              <th>Genre</th>
              <th>Rating</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {books.map((book, i) => (
              <tr key={book._id}>
                <td>{i + 1}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.genre}</td>
                <td>⭐ {book.rating}</td>

                <td className="flex gap-2">
                  <Link to={`/update-book/${book._id}`}>
                    <button className="btn btn-sm btn-primary">Update</button>
                  </Link>

                  <button
                    onClick={() => handleDelete(book._id)}
                    className="btn btn-sm btn-error"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBooks;
