import React from "react";
import Banner from "../../Components/Banner/Banner";
import LatestBooks from "../../Components/LatestBooks/LatestBooks";
import TopGenres from "../../Components/TopGenres/TopGenres";
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <LatestBooks></LatestBooks>
      <TopGenres></TopGenres>
    </div>
  );
};

export default Home;
