import React from "react";
import PopularProducts from "./PopularProducts";
import SearchFilter from "./SearchFilter";
import Discountproduct from "./Discountproduct";
import Banner from "./Banner";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
      <SearchFilter />
      <Banner />
      <PopularProducts />
      <h2 className="text-2xl font-semibold px-10 text-blue-600">Categories</h2>
      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-5 ">
        <Link to="/beauty">
          <div className="p-10 bg-gray-200 rounded-lg flex flex-col items-center scale-100 hover:scale-105">
            <h2 className="text-xl font-semibold">Beauty Products</h2>
            <img
              className="w-36"
              src="https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png"
              alt=""
            />
          </div>
        </Link>
        <Link to='/fragrances'>
          <div className="p-10 bg-gray-200 rounded-lg flex flex-col items-center scale-100 hover:scale-105">
            <h2 className="text-xl font-semibold">Fragrances</h2>
            <img
              className="w-36"
              src="https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/thumbnail.png"
              alt=""
            />
          </div>
        </Link>
        <Link to='groceries'>
          <div className="p-10 bg-gray-200 rounded-lg flex flex-col items-center scale-100 hover:scale-105">
            <h2 className="text-xl font-semibold">Groceries</h2>
            <img
              className="w-36"
              src="https://cdn.dummyjson.com/products/images/groceries/Apple/thumbnail.png"
              alt=""
            />
          </div>
        </Link>
        <Link to='furniture'>
          <div className="p-10 bg-gray-200 rounded-lg flex flex-col items-center scale-100 hover:scale-105">
            <h2 className="text-xl font-semibold">Furniture</h2>
            <img
              className="w-36"
              src="https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/thumbnail.png"
              alt=""
            />
          </div>
        </Link>
      </div>
      <Discountproduct/>
    </div>
  );
};

export default Homepage;
