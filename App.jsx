import Header from "./Components/Header";
import FoodList from "./Components/Foodlist";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6">
        <Header />
        <FoodList />
      </div>
    </div>
  );
}

export default App;