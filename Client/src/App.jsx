import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import { Fitness, MustHave, WomenBaby } from "./Pages/index.js";
import { NavMain, Footer } from "./Components/index.js";
import { CartProvider } from "./context/CartContext.jsx";
import Cart from "./Components/Cart/Cart.jsx";
import HealthcarePage from "./Pages/HealthcarePage.jsx";
import Medicine from "./Pages/Medicine/Medicine.jsx";

function App() {
  return (
    <>
      <CartProvider>
        <div>
          <NavMain />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/healthcare" element={<HealthcarePage />} />
            <Route path="/medicine" element={<Medicine />} />
            <Route path="/musthave" element={<MustHave />} />
            <Route path="/fitness" element={<Fitness />} />
            <Route path="/women&baby" element={<WomenBaby />} />
            <Route path="/footer" element={<Footer />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </div>
      </CartProvider>
    </>
  );
}

export default App;
