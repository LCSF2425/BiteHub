import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function FoodItemCard({ item }) {
  const { cart, addToCart, increment, decrement } = useContext(CartContext);

  const cartItem = cart.find(i => i.name === item.name);

  return (
    <div className="flex justify-between items-center border-b pb-4">
      <div>
        <h4 className="font-semibold">{item.name}</h4>
        <p className="text-gray-500 text-sm">{item.description}</p>
        <p className="mt-2 font-medium">₹{item.price}</p>
      </div>

      <div className="text-center">
        <img
          src={item.image}
          className="w-28 h-24 object-cover rounded mb-2 mx-auto"
        />

        {cartItem ? (
          <div className="flex items-center border rounded">
            <button
              onClick={() => decrement(item.name)}
              className="px-3 py-1 text-lg"
            >
              −
            </button>

            <span className="px-3">{cartItem.quantity}</span> {/* FIXED */}

            <button
              onClick={() => increment(item.name)}
              className="px-3 py-1 text-lg"
            >
              +
            </button>
          </div>
        ) : (
          <button
            onClick={() => addToCart(item)}
            className="border border-green-600 text-green-600 px-6 py-1 rounded font-semibold"
          >
            ADD
          </button>
        )}
      </div>
    </div>
  );
}
