import { Routes, Route } from "react-router-dom";
import './App.css'
import { useSelector } from "react-redux";
import Header from "./components/header/Header";
import About from "./pages/about/About";
import Cart from "./pages/cart/Cart";
import Home from "./pages/home/Home";
import ProductList from "./pages/productlist/ProductList";
import Profile from "./pages/profile/Profile";
import Success from "./pages/success/Success";
import Footer from "./components/footer/Footer";
import Verification from "./modals/verification/Verification";

function App() {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <div className="App">
        <Header />
        <Verification/>
        <div className="ContainerWrap">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog/:category" element={<ProductList />} />
          <Route path="/catalog/" element={<ProductList />} />
          {user &&
            (
              <>
                <Route path="/profile" element={<Profile />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/success" element={<Success />} />
              </>
            )}
          <Route path="/about" element={<About />} />
        </Routes>
        </div>
      <Footer />
    </div>
  );
}

export default App;
