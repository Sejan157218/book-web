import React from "react";

const Cart = () => {
  return (
    <div>
      <div className="card my-5">
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
                  3 items
                </div>
              </div>
            </div>
            <div className="row border-top border-bottom">
              <div className="row main align-items-center">
                <div className="col-2">
                  <img
                    className="img-fluid"
                    src="https://i.imgur.com/1GrakTl.jpg"
                  />
                </div>
                <div className="col">
                  <div className="row text-muted">Shirt</div>
                  <div className="row">Cotton T-shirt</div>
                </div>
                <div className="col cart-a">
                  <a href="#">-</a>
                  <a href="#" className="border">
                    1
                  </a>
                  <a href="#">+</a>
                </div>
                <div className="col">
                  $ 44.00 <span className="close">&#10005;</span>
                </div>
              </div>
            </div>

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
              <div className="col ps-0">ITEMS 3</div>
              <div className="col text-right">$ 132.00</div>
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
              <div className="col text-right">$; 137.00</div>
            </div>
            <button className="btn">CHECKOUT</button>
          </div>
        </div>
      </div>
      <div class="mapouter"><div class="gmap_canvas"><iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=muhammadpur%20dhaka&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://123movies-to.org"></a><br/><style></style></div></div>

    <div>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/uDw7ArEVYSY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>


    <div>
    <iframe src="https://victormochere.com"  width="560" height="315"></iframe>
    </div>

    <div>
    <embed type="text/html" src="https://theuselessweb.com/" width="800" height="500"/>
    </div>
    </div>


  );
};

export default Cart;
