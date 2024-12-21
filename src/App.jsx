import React from "react";
import { BrowserRouter as Router, Routes, Route,useParams} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Homepage from "./Homepage";
import Newsletter from "./Newsletter";
import Product from "./Product";
import Beauty from "./Beauty";
import Groceries from "./Groceries";
import Fragrances from "./Fragrances";
import Furniture from "./Furniture";
import Productdetails from "./Productdetails";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/" element={<Productdetails/>}/>
        <Route path="/products" element={<Product/>} />
        <Route path="/beauty" element={<Beauty/>}/>
        <Route path="/fragrances" element={<Fragrances/>}/>
        <Route path="/furniture" element={<Furniture/>}/>
        <Route path="/groceries" element={<Groceries/>}/>
        <Route path="products/:id" element={<Productdetails/>}/>
      </Routes>
      <Newsletter/>
      <Footer />
    </Router>
  );
};

export default App;
