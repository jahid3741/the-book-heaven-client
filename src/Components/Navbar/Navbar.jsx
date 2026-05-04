import { Link, NavLink } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut().catch(() => {});
  };

  return (
    <div className="navbar bg-base-100 shadow-md px-4">
      <div className="navbar-start">
        <Link to="/" className="text-2xl font-bold">
          Book Haven
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-4">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/all-books">All Books</NavLink>
          </li>
          <li>
            <NavLink to="/add-book">Add Book</NavLink>
          </li>
          <li>
            <NavLink to="/my-books">My Books</NavLink>
          </li>
        </ul>
      </div>

      <div className="navbar-end gap-3">
        {user ? (
          <>
            <img
              src={user?.photoURL}
              alt=""
              title={user?.displayName}
              className="w-10 h-10 rounded-full"
            />
            <button onClick={handleLogout} className="btn btn-error btn-sm">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="btn btn-outline btn-sm">
              Login
            </Link>
            <Link to="/register" className="btn btn-primary btn-sm">
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
