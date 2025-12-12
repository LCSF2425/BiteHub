import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";
import FoodItemCard from "../components/FoodItemCard";
import Layout from "../components/Layout";
import Loader from "../components/Loader";

export default function RestaurantDetails() {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    api.get(`/restaurants/${id}`).then(res => setRestaurant(res.data));
  }, [id]);

  if (!restaurant) return <Layout><Loader /></Layout>;

  return (
    <Layout>
      <h2 className="text-2xl font-bold mb-4">{restaurant.name}</h2>

      <div className="space-y-6">
        {restaurant.items.map(item => (
          <FoodItemCard key={item.name} item={item} />
        ))}
      </div>
    </Layout>
  );
}
