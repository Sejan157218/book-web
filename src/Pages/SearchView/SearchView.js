import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const SearchView = () => {
  return (
    <Container>
      <Row>
        <Col xs lg="3">
          <div className="my-3">
            <div className="sort-div p-3" id="flexRadioDefault">
              <h3>Sort</h3>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label class="form-check-label" for="flexRadioDefault1">
                New Released
                </label>
              </div>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  
                />
                <label class="form-check-label" for="flexRadioDefault2">
                Price - Low to High
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault3"
                  
                />
                <label class="form-check-label" for="flexRadioDefault3">
                Price - Low to High
                </label>
              </div>

            </div>
          </div>
          <div className="my-3">
            <div className="sort-div p-3" id="category">
              <h3>Category</h3>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="category"
                  id="flexRadioDefault4"
                />
                <label class="form-check-label" for="flexRadioDefault4">
                Category1
                </label>
              </div>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="category"
                  id="flexRadioDefault5"
                  
                />
                <label class="form-check-label" for="flexRadioDefault5">
                Category2
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="category"
                  id="flexRadioDefault6"
                  
                />
                <label class="form-check-label" for="flexRadioDefault6">
                Category3
                </label>
              </div>

            </div>
          </div>
          <div className="my-3">
            <div className="sort-div p-3" id="authors">
              <h3>Authors</h3>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="authors"
                  id="flexRadioDefault7"
                />
                <label class="form-check-label" for="flexRadioDefault7">
                Authors1
                </label>
              </div>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="authors"
                  id="flexRadioDefault8"
                  
                />
                <label class="form-check-label" for="flexRadioDefault8">
                Authors2
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="authors"
                  id="flexRadioDefault9"
                  
                />
                <label class="form-check-label" for="flexRadioDefault9">
                Authors3
                </label>
              </div>

            </div>
          </div>
          <div className="my-3">
            <div className="sort-div p-3" id="ratings">
              <h3>Ratings</h3>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="ratings"
                  id="flexRadioDefault10"
                />
                <label class="form-check-label" for="flexRadioDefault10">
                1
                </label>
              </div>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="ratings"
                  id="flexRadioDefault11"
                  
                />
                <label class="form-check-label" for="flexRadioDefault11">
                2
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="ratings"
                  id="flexRadioDefault12"
                  
                />
                <label class="form-check-label" for="flexRadioDefault12">
                3
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="ratings"
                  id="flexRadioDefault13"
                  
                />
                <label class="form-check-label" for="flexRadioDefault13">
                4
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="ratings"
                  id="flexRadioDefault14"
                  
                />
                <label class="form-check-label" for="flexRadioDefault15">
                5
                </label>
              </div>

            </div>
          </div>
        </Col>
        <Col xs lg="9">
          <Row xs={1} md={3} className="g-4">
            {Array.from({ length: 23 }).map((_, idx) => (
              <div class=" container">
                <div class="d-flex flex-column align-items-center justify-content-center product-item my-3">
                  <div class="product">
                    {" "}
                    <img
                      src="https://images.pexels.com/photos/54203/pexels-photo-54203.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      alt=""
                    />
                    <ul class="d-flex align-items-center justify-content-center list-unstyled icons">
                      <li class="icon">Add To Cart</li>
                    </ul>
                  </div>
                  <div class="tag bg-red">sale</div>
                  <div class="title pt-4 pb-1">Winter Sweater</div>
                  <div class="d-flex align-content-center justify-content-center">
                    {" "}
                    <span class="fas fa-star"></span>{" "}
                    <span class="fas fa-star"></span>{" "}
                    <span class="fas fa-star"></span>{" "}
                    <span class="fas fa-star"></span>{" "}
                    <span class="fas fa-star"></span>{" "}
                  </div>
                  <div class="price">$ 60.0</div>
                </div>
              </div>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchView;
