import React, { useState, useContext } from "react";
import { ProductsContext } from "./Contex";
import './SingleProduct.css'
const SingleProduct = ({ el }) => {
  const { products, setProducts } = useContext(ProductsContext);
  const [editId, setEditId] = useState(null);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const handleDelete = (selId) => {
    const copy = products.filter((cur) => cur.id != selId);
    console.log(selId);
    setProducts([...copy]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const copy = [...products];
    copy.map((el) => {
      if (el.id === editId) {
        el.title = title || el.title;
        el.price = price || el.price;
      }
    });
    setProducts([...copy]);
    setEditId(null);
    setPrice("");
    setTitle("");
  };
  return (
    <React.Fragment>
      <div key={el.id} className="box">
        <img src={el.thumbnail}></img>
        <div id="title">
          <h2>{el.title}</h2>
          <h3>
            Price- $
            {(el.price - (el.discountPercentage / 100) * el.price).toFixed(2)}
          </h3>
        </div>
        
        <div id="btn">
          <button onClick={() => setEditId(el.id)}>Edit</button>
          <button onClick={() => handleDelete(el.id)}>Delete</button>
        </div>
        {editId && (
          <form onSubmit={handleSubmit}>
            <label>Title: </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label>Price: </label>
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder={`${el.discountPercentage}% Discount will be added on this price`}
            />
            <button type="submit">Save</button>
          </form>
        )}
      </div>
    </React.Fragment>
  );
};

export default SingleProduct;
