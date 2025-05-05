import { Link, useNavigate } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { useCart } from "../utils/CartContext";

const Navbar = () => {
  const { cartItems, getTotalPrice } = useCart();
  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate("/cart"); // Navigate to the CartPage
  };

  return (
    <div className="flex justify-between items-center h-20 w-[90%] mx-auto relative">
      <div className="flex items-center gap-2">
        <img src="/logo.png" alt="logo" className="h-10" />
        <h1 className="text-3xl font-semibold">Mike</h1>
      </div>

      <div>
        <Link to="/" className="text-2xl font-bold text-black-500 hover:text-blue-700 mx-4">Home</Link>
        <Link to="/products" className="text-2xl font-bold text-black-500 hover:text-blue-700 mx-4">Products</Link>
        <Link to="/users" className="text-2xl font-bold text-black-500 hover:text-blue-700 mx-4">User</Link>
      </div>

      <div className="relative flex items-center">
        <button
          onClick={handleCartClick}
          className="text-3xl text-blue-500 hover:text-blue-700 transition-all duration-200"
        >
          <IoCartOutline />
        </button>
        {cartItems.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            {cartItems.length}
          </span>
        )}
        <p className="ml-4 text-lg font-semibold">
          Total: ${getTotalPrice().toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default Navbar;
