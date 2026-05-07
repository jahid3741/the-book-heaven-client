import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import toast from "react-hot-toast";
import { format } from "date-fns";

import api from "../../api/axios";
import Spinner from "../../Components/Spinner/Spinner";
import { AuthContext } from "../../Context/AuthProvider";

const BookDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);

  const [book, setBook] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    api.get(`/books/${id}`).then((res) => setBook(res.data));
  }, [id]);

  useEffect(() => {
    api.get(`/comments/${id}`).then((res) => setComments(res.data));
  }, [id]);

  const handleComment = (e) => {
    e.preventDefault();

    const commentText = e.target.comment.value;

    const commentData = {
      bookId: id,
      name: user.displayName,
      photo: user.photoURL,
      comment: commentText,
      createdAt: new Date(),
    };

    api
      .post("/comments", commentData)
      .then(() => {
        toast.success("Comment added");

        setComments((prev) => [...prev, commentData]);

        e.target.reset();
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message || "Something went wrong");
      });
  };

  if (!book) return <Spinner />;

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-8 bg-base-100 shadow-xl rounded-xl p-6">
        <img
          src={book.coverImage}
          className="w-full h-[500px] object-cover rounded-xl"
        />

        <div>
          <h2 className="text-4xl font-bold mb-4">{book.title}</h2>

          <p className="mb-2">
            <span className="font-bold">Author:</span> {book.author}
          </p>

          <p className="mb-2">
            <span className="font-bold">Genre:</span> {book.genre}
          </p>

          <p className="mb-2">
            <span className="font-bold">Rating:</span> ⭐ {book.rating}
          </p>

          <p className="mt-4">{book.summary}</p>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Comments</h2>

        <form onSubmit={handleComment} className="mb-6">
          <textarea
            name="comment"
            placeholder="Write your comment..."
            className="textarea textarea-bordered w-full"
            required
          />

          <button className="btn btn-primary mt-3">Add Comment</button>
        </form>

        <div className="space-y-4">
          {comments.map((comment, index) => (
            <div key={index} className="bg-base-200 p-4 rounded-xl">
              <div className="flex items-center gap-3 mb-2">
                <img src={comment.photo} className="w-10 h-10 rounded-full" />

                <div>
                  <h3 className="font-bold">{comment.name}</h3>

                  <p className="text-sm text-gray-500">
                    {comment.createdAt
                      ? format(new Date(comment.createdAt), "PPP p")
                      : "Just now"}
                  </p>
                </div>
              </div>

              <p>{comment.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
