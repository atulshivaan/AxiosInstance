import { useCart } from "../utils/CartContext";
import { FaTrashAlt } from "react-icons/fa";
import { IoAdd } from "react-icons/io5";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { useNavigate } from "react-router-dom"; 
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CartPage = () => {
  const { cartItems, getTotalPrice, decreaseQuantity, increaseQuantity } = useCart();
  const navigate = useNavigate(); 


  if (cartItems.length === 0) {
    toast.info("Please add items to your cart!");
  }

  const goToCheckout = () => {
    if (cartItems.length === 0) {
      toast.error("You cannot proceed to checkout with an empty cart!");
      return; 
    }
    navigate("/checkout"); 
  };

  const handleDecreaseQuantity = (productId) => {
    decreaseQuantity(productId);
  };

  const handleIncreaseQuantity = (productId) => {
    increaseQuantity(productId);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-lg">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cartItems.map((product) => (
            <div
              key={product.id}
              className="border p-4 rounded-lg shadow hover:shadow-md transition duration-200"
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-40 object-contain mx-auto mb-2"
              />
              <h2 className="text-lg font-semibold">{product.title}</h2>
              <p className="text-sm text-gray-600 mb-2">${product.price.toFixed(2)}</p>
              <p className="text-sm text-gray-600 mb-2">Quantity: {product.quantity}</p>
              <p className="text-sm text-gray-600 mb-2">
                Total: ${(product.price * product.quantity).toFixed(2)}
              </p>

              <div className="flex gap-2">
                <button
                  onClick={() => handleDecreaseQuantity(product.id)}
                  className="flex items-center gap-2 px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600 transition"
                >
                  Remove One <FaTrashAlt />
                </button>
                <button
                  onClick={() => handleIncreaseQuantity(product.id)}
                  className="flex items-center gap-2 px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition"
                >
                  Add More <IoAdd />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

<div className="mt-6 text-right">
  <button
    className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
    onClick={goToCheckout}
    disabled={cartItems.length === 0} 
  >
    Checkout <MdOutlineShoppingCartCheckout className="text-xl" />
  </button>
</div>

      <div className="mt-4 text-right">
        <p className="text-lg font-semibold">Total: ${getTotalPrice().toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CartPage;
