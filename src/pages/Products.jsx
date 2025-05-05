import { useEffect, useState } from "react";
import { FaCartArrowDown } from "react-icons/fa6";
import axiosInstance from "../utils/axios";
import { useCart } from "../utils/CartContext";

const Products = () => {
  const [products, setProducts] = useState([]);
  const { addToCart, cartItems } = useCart();

  useEffect(() => {
    axiosInstance.get("/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const getProductTotal = (productId) => {
    const productInCart = cartItems.find(item => item.id === productId);
    return productInCart ? productInCart.price * productInCart.quantity : 0;
  };

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow hover:shadow-md transition duration-200">
            <img
              src={product.image}
              alt={product.title}
              className="h-40 object-contain mx-auto mb-2"
            />
            <h2 className="text-lg font-semibold">{product.title}</h2>
            <p className="text-sm text-gray-600 mb-2">${product.price.toFixed(2)}</p>
            
            {/* Calculate total value for this product */}
            <p className="text-sm text-gray-600 mb-2">
              Total: ${getProductTotal(product.id).toFixed(2)}
            </p>

            <button
              onClick={() => addToCart(product)}
              className="flex items-center gap-2 px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition"
            >
              Add to Cart <FaCartArrowDown />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
