import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import toast from "react-hot-toast";

const UpdateBook = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3000/books/${id}`)
      .then(res => res.json())
      .then(data => setBook(data));
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;

    const updatedBook = {
      title: form.title.value,
      author: form.author.value,
      genre: form.genre.value,
      rating: form.rating.value,
      summary: form.summary.value,
      coverImage: form.coverImage.value,
    };

    fetch(`http://localhost:3000/books/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedBook),
    })
      .then(res => res.json())
      .then(() => {
        toast.success("Book updated successfully");
        navigate("/my-books");
      })
      .catch(() => {
        toast.error("Update failed");
      });
  };

  if (!book) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-xl bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-3xl font-bold text-center mb-6">
          Update Book
        </h2>

        <form onSubmit={handleUpdate} className="space-y-4">

          <input
            name="title"
            defaultValue={book.title}
            className="input input-bordered w-full"
            required
          />

          <input
            name="author"
            defaultValue={book.author}
            className="input input-bordered w-full"
            required
          />

          <input
            name="genre"
            defaultValue={book.genre}
            className="input input-bordered w-full"
            required
          />

          <input
            name="rating"
            defaultValue={book.rating}
            className="input input-bordered w-full"
            required
          />

          <input
            name="coverImage"
            defaultValue={book.coverImage}
            className="input input-bordered w-full"
            required
          />

          <textarea
            name="summary"
            defaultValue={book.summary}
            className="textarea textarea-bordered w-full"
            required
          />

          <button className="btn btn-primary w-full">
            Update Book
          </button>

        </form>
      </div>
    </div>
  );
};

export default UpdateBook;