import { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";
import { AuthContext } from "../../Context/AuthProvider";

const Register = () => {
  const { createUser, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    if (!/[A-Z]/.test(password)) {
      return toast.error("Must have one uppercase letter");
    }

    if (!/[a-z]/.test(password)) {
      return toast.error("Must have one lowercase letter");
    }

    if (password.length < 6) {
      return toast.error("Password must be at least 6 characters");
    }
    createUser(email, password)
      .then((result) => {
        return updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        });
      })
      .then(() => {
        toast.success("Registration successful");
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.message);
      });

    createUser(email, password)
      .then(() => {
        toast.success("Registration successful");
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const handleGoogle = () => {
    googleLogin()
      .then(() => {
        toast.success("Google login successful");
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md p-8 shadow-lg rounded-lg bg-white">
        <h2 className="text-3xl font-bold text-center mb-6">Register</h2>

        <form onSubmit={handleRegister} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="input input-bordered w-full"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered w-full"
            required
          />

          <input
            type="text"
            name="photo"
            placeholder="Photo URL"
            className="input input-bordered w-full"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input input-bordered w-full"
            required
          />

          <button type="submit" className="btn btn-primary w-full">
            Register
          </button>
        </form>

        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500">
            Login
          </Link>
        </p>

        <button onClick={handleGoogle} className="btn btn-outline w-full mt-4">
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Register;
