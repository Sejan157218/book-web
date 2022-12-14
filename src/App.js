import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/Assets/css/style.css";
import Home from "./Pages/Home/Home/Home";
import NavbarCom from "./Pages/Share/Navbar/Navbar";
import Footer from "./Pages/Home/Footer/Footer";
import Cart from "./Pages/Cart/Cart";
import BookDetails from "./Pages/BookDetails/BookDetails";
import SearchView from "./Pages/SearchView/SearchView";
import AuthProvider from "./Context/AuthProvider";
import SearchWithValue from "./Pages/SearchWithValue/SearchWithValue";
import Login from "./Pages/Share/Login/Login";
import SignUp from "./Pages/Share/SignUp/SignUp";
import SentOTP from "./Pages/Share/SentOTP/SentOTP";
import ConfirmOTP from "./Pages/Share/ConfirmOTP/ConfirmOTP";
import MyOrder from "./Pages/MyOrder/MyOrder";
import PrivateRoute from "./Pages/Share/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <NavbarCom></NavbarCom>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bookdetails/:id" element={<BookDetails />} />
            <Route path="/search/:slug/:title" element={<SearchView />} />
            <Route path="/search/:searchValue/" element={<SearchWithValue />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/sentotp" element={<SentOTP />} />
            <Route path="/confirmotp/:email" element={<ConfirmOTP />} />
            <Route
              path="/cart"
              element={
                <PrivateRoute>
                  <Cart />
                </PrivateRoute>
              }
            />
            <Route
              path="/myorder"
              element={
                <PrivateRoute>
                  <MyOrder />
                </PrivateRoute>
              }
            />
          </Routes>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
