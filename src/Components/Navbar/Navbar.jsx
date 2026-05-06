import { Link, NavLink } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        console.log("logout done");
      })
      .catch(() => {});
  };

  const navLinkStyle = ({ isActive }) =>
    `relative pb-1 transition-all duration-300 font-medium ${
      isActive
        ? "text-purple-600 dark:text-purple-400 border-b-2 border-purple-600 dark:border-purple-400"
        : "text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-300 hover:border-b-2 hover:border-purple-600 dark:hover:border-purple-300 border-b-2 border-transparent"
    }`;

  return (
    <div className="sticky top-0 z-50 bg-white/80 dark:bg-black/50 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white">
      <div className="navbar max-w-7xl mx-auto px-4 md:px-6 h-20">
        <div className="navbar-start lg:w-1/4">
          <Link
            to="/"
            className="flex items-center gap-2 text-2xl font-extrabold tracking-wide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-8 h-8 text-purple-600 dark:text-purple-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
              />
            </svg>
            Book Haven
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex flex-1 justify-center">
          <ul className="flex items-center gap-8">
            <li>
              <NavLink to="/" className={navLinkStyle}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/all-books" className={navLinkStyle}>
                All Books
              </NavLink>
            </li>
            <li>
              <NavLink to="/add-book" className={navLinkStyle}>
                Add Book
              </NavLink>
            </li>
            <li>
              <NavLink to="/my-books" className={navLinkStyle}>
                My Books
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="navbar-end lg:w-1/4 flex items-center justify-end gap-4">
          {user ? (
            <>
              <img
                src={
                  user?.photoURL ||
                  "https://ui-avatars.com/api/?name=" +
                    (user?.displayName || "User")
                }
                alt="Profile"
                referrerPolicy="no-referrer"
                data-tooltip-id="user-tooltip"
                data-tooltip-content={user?.displayName || "User"}
                className="w-10 h-10 rounded-full border-2 border-purple-500/50 object-cover cursor-pointer hover:scale-105 transition-transform bg-gray-100"
              />
              <Tooltip id="user-tooltip" place="bottom" className="z-50" />

              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-5 py-2 rounded-full border border-gray-300 dark:border-white/30 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-300 text-sm font-medium cursor-pointer"
              >
                Logout
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                  />
                </svg>
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="px-5 py-2 rounded-full border border-gray-300 dark:border-white/30 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-300 text-sm font-medium"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-5 py-2 rounded-full bg-purple-600 hover:bg-purple-700 text-white transition-all duration-300 text-sm font-medium shadow-lg shadow-purple-600/30"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
