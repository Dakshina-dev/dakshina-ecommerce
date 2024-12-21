import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full p-5 border">
      <Link to="/">
      <h1 className="select-none text-3xl font-bold text-center text-orange-700">
        Digital Store
      </h1>
      </Link>
    </div>
  );
};

export default Header;
