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
      rating: parseInt(form.rating.value),
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

  const inputStyle =
    "w-full px-5 py-3.5 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-pink-500 dark:focus:border-pink-400 focus:ring-1 focus:ring-pink-500 transition-all font-inter";

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 bg-gray-50 dark:bg-[#0f081c] transition-colors duration-500 flex items-center justify-center relative overflow-hidden">
      <div className="absolute top-40 left-20 w-72 h-72 bg-pink-400/20 dark:bg-pink-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-400/20 dark:bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="w-full max-w-3xl bg-white dark:bg-[#1a0f2e] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] rounded-3xl p-8 md:p-12 border border-gray-100 dark:border-white/10 relative z-10 backdrop-blur-xl">
        <div className="text-center mb-10">
          <p className="uppercase tracking-[5px] text-pink-500 dark:text-pink-400 text-xs font-bold mb-3 font-inter">
            Contribute to the library
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white font-playfair">
            Add New{" "}
            <span className="text-pink-500 dark:text-pink-400 italic">
              Book
            </span>
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1 font-inter">
                Book Title
              </label>
              <input
                name="title"
                placeholder="e.g. The Great Gatsby"
                className={inputStyle}
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1 font-inter">
                Author Name
              </label>
              <input
                name="author"
                placeholder="e.g. F. Scott Fitzgerald"
                className={inputStyle}
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1 font-inter">
                Genre
              </label>
              <input
                name="genre"
                placeholder="e.g. Fiction, Fantasy, Sci-Fi"
                className={inputStyle}
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1 font-inter">
                Rating
              </label>
              <input
                name="rating"
                type="number"
                min="1"
                max="5"
                placeholder="1 to 5"
                className={inputStyle}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1 font-inter">
              Cover Image URL
            </label>
            <input
              name="coverImage"
              type="url"
              placeholder="https://example.com/image.jpg"
              className={inputStyle}
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1 font-inter">
              Book Summary
            </label>
            <textarea
              name="summary"
              rows="4"
              placeholder="Write a brief description of the book..."
              className={`${inputStyle} resize-none`}
              required
            ></textarea>
          </div>

          <button className="w-full mt-8 py-4 bg-pink-500 hover:bg-pink-600 text-white rounded-xl font-bold tracking-wide transition-all duration-300 shadow-lg shadow-pink-500/30 hover:shadow-xl hover:shadow-pink-500/40 hover:-translate-y-1 font-inter uppercase text-sm">
            Publish Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
