import React from "react";
import Banner from "../../Components/Banner/Banner";
import LatestBooks from "../../Components/LatestBooks/LatestBooks";
const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center text-center px-4">
      <Banner></Banner>
      <LatestBooks></LatestBooks>
    </div>
  );
};

export default Home;
