import { Navigate } from 'react-router-dom';
import { useCart } from '../utils/CartContext';


const PrivateRoute = ({ element, required, redirectPath = '/' }) => {
  const { cartItems } = useCart();


  if (required && cartItems.length === 0) {
    return <Navigate to={redirectPath} />;
  }

  
  return element;
};

export default PrivateRoute;
