import DishCard from "./DishCard";

const Category = ({ title, items }) => {
  return (
    <div>
      <h2>{title}</h2>
      {items.map((dish) => (
        <DishCard key={dish._id} dish={dish} />
      ))}
    </div>
  );
};

export default Category;
