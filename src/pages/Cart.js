import React from "react";
import Announcement from "../components/Announcement/Announcement";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import ProductCart from "../components/ProductCart/ProductCart";

const Cart = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <ProductCart />
      <Footer />
    </>
  );
};

export default Cart;
