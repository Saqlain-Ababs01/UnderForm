import React from "react";
import NavBar from "../components/Common/Navbar";
import ProductList from "../features/ProductList/component/ProductList";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <ProductList />
    </div>
  );
};

export default HomePage;
