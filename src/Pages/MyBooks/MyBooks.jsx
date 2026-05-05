import { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import toast from "react-hot-toast";
import { AuthContext } from "../../Context/AuthProvider";

const MyBooks = () => {
  const { user } = useContext(AuthContext);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/my-books?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setBooks(data));
    }
  }, [user]);

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/books/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("Book deleted");
        setBooks(books.filter((book) => book._id !== id));
      })
      .catch(() => toast.error("Delete failed"));
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">My Books</h2>

      <div className="overflow-x-auto">
        <table className="table w-full border">
          <thead className="bg-gray-200">
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Author</th>
              <th>Genre</th>
              <th>Rating</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {books.map((book, index) => (
              <tr key={book._id} className="hover">
                <td>{index + 1}</td>
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
