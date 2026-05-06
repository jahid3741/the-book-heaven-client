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
    `relative pb-1 transition-all duration-300 font-medium tracking-wide ${
      isActive
        ? "text-pink-600 dark:text-pink-400 border-b-2 border-pink-600 dark:border-pink-400"
        : "text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-300 hover:border-b-2 hover:border-pink-600 dark:hover:border-pink-300 border-b-2 border-transparent"
    }`;

  return (
    <div className="sticky top-0 z-50 bg-white/70 dark:bg-[#0f081c]/70 backdrop-blur-md border-b border-[#f3f4f6] dark:border-white/10 text-gray-900 dark:text-white transition-colors duration-500">
      {/* Increased horizontal padding (px-8 lg:px-12) for a spacious feel */}
      <div className="navbar max-w-7xl mx-auto px-8 lg:px-12 h-24">
        <div className="navbar-start lg:w-1/4">
          <Link
            to="/"
            className="flex items-center gap-3 text-2xl font-extrabold tracking-wide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-8 h-8 text-pink-500 dark:text-pink-400"
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
          {/* Increased gap between links to gap-10 */}
          <ul className="flex items-center gap-10">
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

        <div className="navbar-end lg:w-1/4 flex items-center justify-end gap-5">
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
                className="w-11 h-11 rounded-full border-2 border-pink-500/50 object-cover cursor-pointer hover:scale-105 transition-transform bg-gray-100 shadow-sm"
              />
              <Tooltip id="user-tooltip" place="bottom" className="z-50" />

              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-6 py-2.5 rounded-full border border-gray-300 dark:border-white/30 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-300 text-sm font-semibold tracking-wide cursor-pointer"
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
                className="px-6 py-2.5 rounded-full border border-gray-300 dark:border-white/30 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-300 text-sm font-semibold tracking-wide"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-6 py-2.5 rounded-full bg-pink-500 hover:bg-pink-600 text-white transition-all duration-300 text-sm font-semibold tracking-wide shadow-lg shadow-pink-500/30"
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
