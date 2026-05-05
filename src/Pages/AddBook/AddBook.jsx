import { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Context/AuthProvider";

const AddBook = () => {
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const newBook = {
      title: form.title.value,
      author: form.author.value,
      genre: form.genre.value,
      rating: form.rating.value,
      summary: form.summary.value,
      coverImage: form.coverImage.value,
      userEmail: user?.email,
      userName: user?.displayName,
    };

    fetch("http://localhost:3000/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBook),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("Book added successfully");
        form.reset();
      })
      .catch(() => {
        toast.error("Failed to add book");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-xl bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-3xl font-bold text-center mb-6">
          Add New Book
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input name="title" placeholder="Title" className="input input-bordered w-full" required />

          <input name="author" placeholder="Author" className="input input-bordered w-full" required />

          <input name="genre" placeholder="Genre" className="input input-bordered w-full" required />

          <input name="rating" type="number" placeholder="Rating (1-5)" className="input input-bordered w-full" required />

          <input name="coverImage" placeholder="Cover Image URL" className="input input-bordered w-full" required />

          <textarea name="summary" placeholder="Summary" className="textarea textarea-bordered w-full" required />

          <button className="btn btn-primary w-full">
            Add Book
          </button>

        </form>
      </div>
    </div>
  );
};

export default AddBook;