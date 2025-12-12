import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Category from "../components/Category";
import api from "../services/api";

const Restaurant = () => {
  const { id } = useParams();

  const [restaurant, setRestaurant] = useState(null);
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    api.get(`/restaurants/${id}`)
      .then(res => setRestaurant(res.data.restaurant));

    api.get(`restaurants/${id}`)
      .then(res => {
        console.log(res)
        setDishes(res.data.items);
      })
      
  }, [id]);

  // ✅ group dishes by category (Swiggy style)
  const grouped = dishes.reduce((acc, dish) => {
    acc[dish.category] = acc[dish.category] || [];
    acc[dish.category].push(dish);
    return acc;
  }, {});

  return (
    <>
      {restaurant && (
        <div>
          <h1>{restaurant.name}</h1>
          <p>{restaurant.cuisines.join(", ")}</p>
          <p>⭐ {restaurant.rating}</p>
        </div>
      )}

      {Object.entries(grouped).map(([category, items]) => (
        <Category key={category} title={category} items={items} />
      ))}
    </>
  );
};

export default Restaurant;
