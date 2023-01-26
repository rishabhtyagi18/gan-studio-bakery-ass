import React from "react";
import { useSelector } from "react-redux";
import { selectTopFourProducts } from "../../Utilities/Utilities";
import ProductList from "../ProductList/ProductList";
import Header from "../Header/Header";
import Banner from "./Banner";
import "./css/Home.css";

const Home = () => {
  const topProducts = useSelector(selectTopFourProducts);

  return (
    <>
        <Header />
        <Banner />
        <div className="top-selling">
        <h1 className="headline">New Products</h1>
        <div className="top-products-container">
            {topProducts.map((product) => (
                <ProductList key={product.id} product={product} />
            ))}
        </div>
        </div>
    </>
  );
};

export default Home;
