import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hook/useAuth";



const NavbarCom = () => {
  const { author, category } = useAuth();
  const location = useLocation();
  const destination = location?.state?.from || "/";
  const navigate = useNavigate();

  const handlerToOnChange = (e) => {
    navigate(`search/${e.target.value}/`);

    if (!e.target.value) {
      navigate(destination);
   
  };
  }
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Form className="d-flex">
                <div id="subscription_area">
                  <div class="container">
                    <div class="row">
                      <div class="col-sm-12">
                        <div class="subscribe_now">
                          <form class="subscribe_form">
                            <div class="input-group">
                              <input
                              onChange={handlerToOnChange}
                                type="text"
                                class="form-control"
                                name="text"
                                placeholder="Enter your search"
                              />
                              <span class="input-group-btn">
                                <button class="btn btn-default" type="button">
                                  Search
                                </button>
                              </span>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Form>
            </Nav>
            <Nav>
              <Nav.Link href="#action2">
                <i class="fa-solid fa-cart-shopping"></i>
              </Nav.Link>
              <Link to='/login'>Login</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Link to='/'>Home </Link>

                <NavDropdown title="Category" id="navbarScrollingDropdown">
                  {category.map((item) => (
                    <Link to={`search/category/${item?.title}`}>{item?.title} </Link>
            
                  ))}
                </NavDropdown>

                <NavDropdown title="Author" id="navbarScrollingDropdown">
                  {author.map((item) => (
                    <Link to={`search/author/${item?.name}`}>{item?.name} </Link>
                  ))}
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default NavbarCom;
