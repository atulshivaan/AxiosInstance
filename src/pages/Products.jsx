import { useEffect, useState } from "react";

import axiosInstance from "../utils/axios";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axiosInstance.get("/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div className="p-4">
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded shadow">
            <img src={product.image} alt={product.title} className="h-40 object-contain mx-auto" />
            <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
            <p className="text-sm text-gray-600">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
