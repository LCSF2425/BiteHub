import { useNavigate } from "react-router-dom";

export default function RestaurantCard({ restaurant }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/restaurant/${restaurant._id}`)}
      className="cursor-pointer rounded-lg overflow-hidden shadow hover:shadow-lg transition"
    >
      <img
        src={restaurant.image}
        className="h-44 w-full object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{restaurant.name}</h3>
        <p className="text-gray-500 text-sm">{restaurant.location}</p>
        <div className="flex justify-between text-sm mt-2">
          <span>⭐ {restaurant.avgRating}</span>
          <span>{restaurant.deliveryTime}</span>
        </div>
      </div>
    </div>
  );
}
