function FoodCard({ food }) {
  return (
    <div className="bg-white rounded-3xl  shadow-lg overflow-hidden">
      <img 
        src={food.image}   
        alt={food.name} 
        className="w-full h-60" 
      />

      <div className="p-5">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-2xl">{food.name}</h2>
          <span className="bg-green-100 text-green-600 px-3 py-1 rounded-xl">
            {food.price}
          </span>

        </div>
        <p className="text-gray-500 mt-2">Delicious meal for everyone.</p>
        
        <div className="flex justify-between items-center mt-5">
          <div>⭐ {food.rating} <span className="ml-3">{food.time}</span></div>
          <button className="bg-blue-900 text-white px-5 py-2 rounded-xl">Add</button>
        </div>
      </div>
    </div>
  );
}

export default FoodCard;