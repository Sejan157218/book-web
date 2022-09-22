import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../../hook/useAuth";

const MyOrder = () => {
  const [orderBook, setOrderBook] = useState([]);
  const { URl, user, cartBook } = useAuth();

  useEffect(() => {
    axios(`${URl}/order/${user.email}/`)
      .then(function (response) {
        // console.log(response);
        setOrderBook(response.data);
        // if (response.data.payload) {
        //   handlerToSetUser(response.data.payload)
        //   setError("user Login successfully");
        //   navigate(`/`)
        // }
      })
      .catch(function (error) {
        // console.log(error.response.data.error );
        // console.log(error.response.data.email);
        console.log(error);
        if (error.response.data.error) {
          // setError(error.response.data.error);
        }
      });
  }, [user, URl]);

  return (
    <>
      {orderBook.map((order) => (
        <div>
          <div className="container my-5">
            <div className="row">
              <div className="col-md-12 cart">
                <div className="title">
                  <div className="row">
                    <div className="col">
                      <h4>
                        <b>Order ID : {order.id}</b>
                      </h4>
                    </div>
                    <div className="col align-self-center text-right text-muted">
                      items: {order.book.length}
                    </div>
                    <div className="col align-self-center text-right text-muted">
                    totalPrice = $ {order.totalPrice}
                    </div>

                    <div className="col align-self-center text-right text-muted">
                    {order.order_status}
                    </div>
                  </div>
                </div>
                {order.book.map((bookorder) => (
                  <div className="row border-top border-bottom">
                    <div className="row main align-items-center">
                      <div className="col-2">
                        <img className="img-fluid" src={`${URl}${bookorder.image}`} />
                       
                      </div>
                      <div className="col">
                        <div className="row text-muted">
                         
                          {bookorder?.category.title}
                        </div>
                        <div className="row">{bookorder?.title}</div>
                      </div>
                      <div className="col cart-a">
                
                        <p className="border mx-2">
                        quantity = {bookorder?.quantity}
                        </p>
                 
                      </div>
                      <div className="col">
                        {/* $ {bookorder?.selling_Price}{" "} */}
                        {/* <span className="close">&#10005;</span> {bookorder?.quantity}{" "} */}
                        {/* = $ {bookorder?.selling_Price * bookorder?.quantity} */}
                       $ {bookorder?.selling_Price}
                      </div>
                      <div className="col text-center">
                      Total=$ {bookorder?.total}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MyOrder;
