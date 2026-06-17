//for props
function Cart({
  cart,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
}) {
    
  return (
    <div className="bg-white p-4 rounded-xl shadow-lg">

      <h1 className="text-3xl font-bold mb-4">
        Cart Items
      </h1>

      {cart.map((item) => (
        <div
          key={item}
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-24 h-24 rounded-lg object-cover"
          />

          <h2 className="font-bold mt-2">
            {item.name}
          </h2>

          <p>Price: {item.price}</p>

          <div className="flex items-center gap-2 mt-3">
            <button
              onClick={() =>
                decreaseQuantity(item.id)
              }
              className="bg-gray-200 px-3 py-1 rounded"
            >
              -
            </button>

            <span className="font-bold">
              {item.quantity}
            </span>

            <button
              onClick={() =>
                increaseQuantity(item.id)
              }
              className="bg-gray-200 px-3 py-1 rounded"
            >
              +
            </button>
          </div>

          <button
            onClick={() =>
              removeItem(item.id)
            }
            className="bg-red-500 text-white px-4 py-2 rounded mt-3"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default Cart;