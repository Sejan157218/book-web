import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../hook/useAuth";



const BookDetails = () => {
  const [book, setBook] = useState({});
  const { URl ,handlerToSetCart,cartMessage} = useAuth();
  const { id } = useParams();
  useEffect(() => {
    fetch(`${URl}/details/${id}/`)
      .then((res) => res.json())
      .then((data) => setBook(data));
  }, [URl, id]);

  return (
    <div className="my-5">
      <div class="card-wrapper">
        <div class="card">
          {/* <!-- card left --> */}
          <div class="product-imgs">
            <div class="img-display">
              <div class="img-showcase">
                <img src={`${URl}${book?.image}`} alt="" />
              </div>
            </div>
          </div>
          {/* <!-- card right --> */}
          <div class="product-content">
            <h2 class="product-title">{book?.title}</h2>

            <div class="product-rating">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
              <span>4.7(21)</span>
            </div>

            <div class="product-price">
              <p class="last-price">
                Old Price: <span>${book?.market_price}</span>
              </p>
              <p class="new-price">
                New Price:
                <span>
                  ${book?.selling_Price} ({book?.discount_percent}%)
                </span>
              </p>
            </div>

            <div class="product-detail">
              <h2>about this item: </h2>
              <p>{book?.description}</p>

              <ul>
                <li>
                  Color: <span>Black</span>
                </li>
                <li>
                  Available: <span>in stock</span>
                </li>
                <li>
                  Category: <span>Shoes</span>
                </li>
                <li>
                  Shipping Area: <span>All over the world</span>
                </li>
                <li>
                  Shipping Fee: <span>Free</span>
                </li>
              </ul>
            </div>

            <div class="purchase-info">
              <input type="number" min="0" value="1" />
              <button onClick={()=>handlerToSetCart(book)} type="button" class="btn-details">
                Add to Cart <i class="fas fa-shopping-cart"></i>
              </button>
              <button type="button" class="btn-details">
                Compare
              </button>
            </div>
            {
              cartMessage? <p>{cartMessage}</p>:""
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
