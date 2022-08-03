import { convertLength } from '@mui/material/styles/cssUtils';
import React  from 'react';
import {useCart} from "react-use-cart";
import "../Styles/Cart.css";

function Cart(){
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    }= useCart();

    if(isEmpty) return <h4 className="text-center my-5"> Your cart is Empty </h4>
    
        return (
            <section calssName="py-4 container">
            <div className="row justify-content-center">
                <div className="col-12">
                    <h5 className="total-items"> Cart({totalUniqueItems}) total Items: ({totalItems})</h5>
                    <table className="table table-light table-hover m-0">
                        <tbody>                        
                            {items.map((item,index)=>{
                                return(
                           <tr key={index}>
                              <td>
                                <img className="img"src={item.image}/>
                              </td>
                              <td>{item.name}</td>
                              <td>Rs.{item.price}</td>
                              <td>{item.cuisineType}/{item.type}</td>
                              <td>Quantity({item.quantity})</td>
                              <td>
                                <button className="btn btn-info ms-2" onClick={()=> updateItemQuantity(item.id, item.quantity-1)}>-</button>
                                <button className="btn btn-info ms-2" onClick={()=> updateItemQuantity(item.id, item.quantity+1)}>+</button>
                                <button className="btn btn-danger ms-2"  onClick={()=> removeItem(item.id)}>Remove Item</button>
                              </td>
                           </tr>
                           )
                        })}
                        </tbody>
                    </table>
                </div>
                <div className="col-auto ms-auto">
                    <h5 className="total-price">Total Price:  Rs.{cartTotal}</h5>
                </div>
                <div className="col-auto">
                    <button className="btn btn-danger m-2" onClick={()=>emptyCart()}>Clear Cart</button>
                    <button className="btn btn-primary m-2">Buy Now</button>
                </div>
            </div>
            </section>
        );
   
}

export default Cart;