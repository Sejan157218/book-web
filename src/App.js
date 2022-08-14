
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/Assets/css/style.css"
import Home from "./Pages/Home/Home/Home";
import NavbarCom from "./Pages/Share/Navbar/Navbar";
import Footer from "./Pages/Home/Footer/Footer";
import Cart from "./Pages/Cart/Cart";
import BookDetails from "./Pages/BookDetails/BookDetails";
import SearchView from "./Pages/SearchView/SearchView";



function App() {
  return (
    <div >
      <Router>
        <NavbarCom></NavbarCom>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/bookdetails" element={<BookDetails />} />
          <Route path="/search" element={<SearchView />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
