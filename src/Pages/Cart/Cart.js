import axios from "axios";
import React, { useState } from "react";
import useAuth from "../../hook/useAuth";

const Cart = () => {
const {URl,user,cartBook,setCartBook,handleToIncrease,handleToDecrease,handlerToDelete,totalQuantity,totalPrice}=useAuth()
const [error,setError]=useState('')
const handlerToOrder=()=>{
if (cartBook.length>0){
  const orderBook={
    user : user.email,
    book : cartBook,
    totalPrice : totalPrice +5,
  }
  axios
      .post(`${URl}/order/`, orderBook)
      .then(function (response) {
        console.log(response);
        if (response.data.msg) {
          setCartBook([])
          localStorage.removeItem('cart')
          setError(response.data.msg);
       
        }
      })
      .catch(function (error) {
        // console.log(error.response.data.error );
        // console.log(error.response.data.email);
        console.log(error);
        if (error.response.data.error) {
          // setError(error.response.data.error); 
        } 
      });
}
}

  return (
    <div>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-8 cart">
            <div className="title">
              <div className="row">
                <div className="col">
                  <h4>
                    <b>Shopping Cart</b>
                  </h4>
                </div>
                <div className="col align-self-center text-right text-muted">
                  {cartBook.length} items
                </div>
              </div>
            </div>
           {
            cartBook.map(cart=>(
              <div className="row border-top border-bottom">
              <div className="row main align-items-center">
                <div className="col-2">
                  <img
                    className="img-fluid"
                    src={`${URl}${cart.image}`}
                  />
                </div>
                <div className="col">
                  <div className="row text-muted"> {cart?.category.title} </div>
                  <div className="row">{cart?.title}</div>
                </div>
                <div className="col cart-a">
                <button className="p-2" onClick={()=>handleToDecrease(cart.id)}>-</button>
                  <a href="#" className="border mx-2">
                  {cart?.quantity}
                  </a>
                  <button className="p-2" onClick={()=>handleToIncrease(cart.id)}>+</button>
                </div>
                <div className="col">
                  $ {cart?.selling_Price} <span className="close">&#10005;</span>  {cart?.quantity} = $ {cart?.selling_Price * cart?.quantity}
                </div>
                <div className="col-1 text-center">
                <span onClick={()=>handlerToDelete(cart.id)} className="close">&#10005;</span> 
                </div>
              </div>
            </div>
            ))
           }

            <div className="back-to-shop">
              <a href="#">&leftarrow;</a>
              <span className="text-muted">Back to shop</span>
            </div>
          </div>
          <div className="col-md-4 summary">
            <div>
              <h5>
                <b>Summary</b>
              </h5>
            </div>
            <hr />
            <div className="row">
              <div className="col ps-0">ITEMS {totalQuantity}</div>
              <div className="col text-right">$ {totalPrice}</div>
            </div>
            <form>
              <p>SHIPPING</p>
              <select>
                <option className="text-muted">
                  Standard-Delivery- $;5.00
                </option>
              </select>
              <p>GIVE CODE</p>
              <input id="code" placeholder="Enter your code" />
            </form>
            {/* <div className="row" style="border-top: 1px solid rgba(0,0,0,.1); padding: 2vh 0;"> */}
            <div className="row">
              <div className="col">TOTAL PRICE</div>
              <div className="col text-right">$; {totalPrice ? totalPrice+5 : 0}</div>
            </div>
            <button onClick={handlerToOrder} className="btn">Order</button>
            {
              error? <p>{error}</p> : ""
            }
          </div>
        </div>
      </div>
    </div>


  );
};

export default Cart;
