//xg k kenaa data , k dhex sotaa data.jsx food keen 

import foods from "./Data";
import FoodCard from "./FoodCard";

function FoodList() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {foods.map((food) => (
        <FoodCard key={food.id} food={food} />
      ))}
    </div>
  );
}

export default FoodList;