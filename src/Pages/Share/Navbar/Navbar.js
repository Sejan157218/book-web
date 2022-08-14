import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavbarCom = () => {
  return (
    <div>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
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
            <Nav.Link href="#action2"><i class="fa-solid fa-cart-shopping"></i></Nav.Link>
            <Nav.Link href="#action1">SignUp</Nav.Link>
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
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
 
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    </div>

  );
};

export default NavbarCom;
