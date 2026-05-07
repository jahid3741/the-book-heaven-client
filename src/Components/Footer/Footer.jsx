import { Link } from "react-router";
import { FaInstagram, FaFacebookF, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-[#0f081c] text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-white/10 transition-colors duration-500 font-inter pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link
              to="/"
              className="flex items-center gap-3 text-2xl font-extrabold tracking-wide text-gray-900 dark:text-white"
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
            <p className="text-sm leading-relaxed pr-4">
              Your ultimate digital library. Discover new worlds, track your
              reading journey, and connect with stories that matter.
            </p>
          </div>

          <div>
            <h3 className="text-gray-900 dark:text-white font-bold uppercase tracking-wider text-sm mb-6">
              Explore
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/all-books"
                  className="hover:text-pink-500 dark:hover:text-pink-400 transition-colors text-sm"
                >
                  Browse Catalog
                </Link>
              </li>
              <li>
                <Link
                  to="/add-book"
                  className="hover:text-pink-500 dark:hover:text-pink-400 transition-colors text-sm"
                >
                  Add a Book
                </Link>
              </li>
              <li>
                <Link
                  to="/my-books"
                  className="hover:text-pink-500 dark:hover:text-pink-400 transition-colors text-sm"
                >
                  My Collection
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 dark:text-white font-bold uppercase tracking-wider text-sm mb-6">
              Support
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/"
                  className="hover:text-pink-500 dark:hover:text-pink-400 transition-colors text-sm"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="hover:text-pink-500 dark:hover:text-pink-400 transition-colors text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="hover:text-pink-500 dark:hover:text-pink-400 transition-colors text-sm"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 dark:text-white font-bold uppercase tracking-wider text-sm mb-6">
              Connect With Us
            </h3>
            <p className="text-sm mb-6">
              Follow us on social media for book recommendations, updates, and
              community events.
            </p>
            <div className="flex gap-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-pink-500 hover:border-pink-500 hover:text-white dark:hover:bg-pink-500 dark:hover:text-white transition-all duration-300 shadow-sm"
              >
                <FaXTwitter size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-pink-500 hover:border-pink-500 hover:text-white dark:hover:bg-pink-500 dark:hover:text-white transition-all duration-300 shadow-sm"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-pink-500 hover:border-pink-500 hover:text-white dark:hover:bg-pink-500 dark:hover:text-white transition-all duration-300 shadow-sm"
              >
                <FaFacebookF size={18} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-pink-500 hover:border-pink-500 hover:text-white dark:hover:bg-pink-500 dark:hover:text-white transition-all duration-300 shadow-sm"
              >
                <FaGithub size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">
            © {new Date().getFullYear()} The Book Haven. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <span className="hover:text-pink-500 dark:hover:text-pink-400 cursor-pointer transition-colors">
              Cookies
            </span>
            <span className="hover:text-pink-500 dark:hover:text-pink-400 cursor-pointer transition-colors">
              Accessibility
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
