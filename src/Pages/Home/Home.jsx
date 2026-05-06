import { useEffect, useState } from "react";
import Banner from "../../Components/Banner/Banner";
import LatestBooks from "../../Components/LatestBooks/LatestBooks";
import TopGenres from "../../Components/TopGenres/TopGenres";

const Home = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="min-h-screen">
      <div className="flex justify-end p-6">
        <label className="swap swap-rotate">
          <input
            type="checkbox"
            onChange={() => setTheme(theme === "light" ? "dark" : "light")}
            checked={theme === "dark"}
          />

          <svg
            className="swap-on h-8 w-8 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64 17l-.71.71a1 1 0 101.41 1.41l.71-.71A1 1 0 005.64 17zM5 12a1 1 0 00-1-1H3a1 1 0 000 2h1a1 1 0 001-1zm7-7a1 1 0 00-1-1V3a1 1 0 00-2 0v1a1 1 0 001 1zm7.66 3.34a1 1 0 00-1.41 0l-.71.71a1 1 0 101.41 1.41l.71-.71a1 1 0 000-1.41zM21 11h-1a1 1 0 000 2h1a1 1 0 000-2zm-9 8a1 1 0 00-1 1v1a1 1 0 002 0v-1a1 1 0 00-1-1zm6.36-2a1 1 0 00-1.41 1.41l.71.71a1 1 0 001.41-1.41zM12 6a6 6 0 100 12 6 6 0 000-12z" />
          </svg>

          <svg
            className="swap-off h-8 w-8 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64 13a1 1 0 00-1.05-.14 8.05 8.05 0 01-3.37.73A8.15 8.15 0 019.08 5.49a8.59 8.59 0 01.25-2A1 1 0 008 2.36 10.14 10.14 0 002 12.05 10.05 10.05 0 0012.05 22 10.14 10.14 0 0021.36 14a1 1 0 00.28-1z" />
          </svg>
        </label>
      </div>

      <Banner></Banner>

      <LatestBooks></LatestBooks>

      <TopGenres></TopGenres>
    </div>
  );
};

export default Home;
