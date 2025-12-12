import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";

export default function Cart() {
  const { cart, clearCart, totalAmount } = useContext(CartContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const tax = totalAmount * 0.13;
  const finalTotal = totalAmount + tax;

  const placeOrder = () => {
  navigate("/order-success");
};


  return (
    <Layout>
      <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map(item => (
            <div key={item.name} className="flex justify-between py-2">
              <span>{item.name} × {item.quantity}</span>
              <span>${item.quantity * item.price}</span>
            </div>
          ))}

          {/* SUBTOTAL */}
          <div className="border-t mt-4 pt-4 flex justify-between text-lg">
            <span>Subtotal</span>
            <span>${totalAmount.toFixed(2)}</span>
          </div>

          {/* TAX */}
          <div className="flex justify-between text-lg">
            <span>Tax (13%)</span>
            <span>${tax.toFixed(2)}</span>
          </div>

          {/* FINAL TOTAL */}
          <div className="flex justify-between font-bold text-xl mt-2">
            <span>Total</span>
            <span>${finalTotal.toFixed(2)}</span>
          </div>

          <button
            onClick={placeOrder}
            className="w-full mt-6 bg-orange-500 text-white py-3 rounded cursor-pointer"
          >
            Place Order
          </button>

          <button
            onClick={() => {
              if (window.confirm("Are you sure you want to clear the cart?")) {
                clearCart();
              }
            }}
            className="w-full mt-2 bg-gray-500 text-white py-3 rounded cursor-pointer"
          >
            Clear Cart
          </button>
        </>
      )}
    </Layout>
  );
}
