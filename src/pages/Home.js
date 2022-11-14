import React from "react";
import Announcement from "../components/Announcement/Announcement";
import Navbar from "../components/Navbar/Navbar";
import HomeSlider from "../components/HomeSlider/HomeSlider";
import Categories from "../components/Categories/Categories";
import Products from "../components/Products/Products";
import NewsLetter from "../components/NewsLetter/NewsLetter";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <HomeSlider />
      <Categories />
      <Products />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Home;
