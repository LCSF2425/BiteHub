const DishCard = ({ dish }) => {
  return (
    <div>
      <img src={dish.imageId} alt={dish.name} />
      <h4>{dish.name}</h4>
      <p>{dish.description}</p>
      <p>$ {dish.price }</p>
      <p>{dish.vegClassifier}</p>
    </div>
  );
};

export default DishCard;
