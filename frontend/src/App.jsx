import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Restaurant from "./pages/Restaurant";
import { AuthProvider } from "./context/AuthContext";
import RestaurantDetails from "./pages/RestaurantDetails";
import Cart from "./pages/Cart";
import OrderSuccess from "./pages/OrderSuccess";


const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurant/:id" element={<RestaurantDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order-success" element={<OrderSuccess />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
