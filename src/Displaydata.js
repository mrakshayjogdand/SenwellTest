import React, { useContext, useState } from "react";
import logo from "./senwell.a784f91cc6a5605fb4ac.png";
import { ProductsContext } from "./Contex";
import SingleProduct from "./SingleProduct";
import Pagination from "@mui/material/Pagination";

function Displaydata() {
  const { products, setProducts } = useContext(ProductsContext);
  const [page, setPage] = useState(1);

  return (
    <React.Fragment>
      <div id="navbar">
        <img src={logo} id="logo" />
        <h1>SENWELL</h1>
        <h1>ASSIGNMENT</h1>
      </div>

      <div id="container">
        {products &&
          products
            .slice(page * 6 - 6, page * 6)
            .map((el) => <SingleProduct el={el} key={el.id} />)}
      </div>
      <Pagination
        count={Math.ceil(products.length/6)}
        showFirstButton
        showLastButton
        onChange={(e, p) => setPage(p)}
      />
    </React.Fragment>
  );
}

export default Displaydata;
