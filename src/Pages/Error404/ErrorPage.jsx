import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <p className="text-xl mt-2">Page not found</p>

      <Link to="/">
        <button className="btn btn-primary mt-4">Go Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
