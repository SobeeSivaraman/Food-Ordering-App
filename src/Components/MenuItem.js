import React from "react";
import "../Styles/MenuItem.css";
import { useCart } from "react-use-cart";

function MenuItem({ item}) {
  const {addItem}=useCart();
  
  return (
    <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
    <div className="card p-0 overflow-hidden h-100 shadow">
      {/* <div className="card-img-top"  style={{ backgroundImage: `url(${item.image})` }}></div> */}
      <img src={item.image} className="card-img-top img-fluid" alt="img" />
      <div className="card-body text-center ">
        <h3 className="card-title">{item.name}</h3>
        <p className="card-title">Rs.{item.price}</p>
        <p className="card-text"> {item.cuisineType}/{item.type}</p>
        <button
          className="btn btn-primary me-md-2"
          onClick={() => addItem(item)}>
          Add to Cart
        </button>
      </div>
    </div>
    </div>
  );
}
export default MenuItem;
