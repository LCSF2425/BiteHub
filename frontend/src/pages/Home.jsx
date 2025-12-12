import { useEffect, useState } from "react";
import api from "../services/api";
import RestaurantCard from "../components/RestaurantCard";
import Layout from "../components/Layout";
import Loader from "../components/Loader";

export default function Home() {
  const [restaurants, setRestaurants] = useState(null);

  useEffect(() => {
    api.get("/restaurants").then(res => setRestaurants(res.data));
  }, []);

  return (
    <Layout>
      <h2 className="text-2xl font-semibold mb-6">Restaurants Near You</h2>

      {!restaurants ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {restaurants.map(r => (
            <RestaurantCard key={r._id} restaurant={r} />
          ))}
        </div>
      )}
    </Layout>
  );
}
