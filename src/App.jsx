import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Products from './pages/Products';
import User from './pages/User';
import Home from './pages/Home';
import CartPage from './pages/AddtoCart';
import CheckoutPage from './pages/Checkout';
import PaymentPage from './pages/PaymentPage';
import OrderConfirmedPage from './pages/OrderConfirmedPage';
import { ToastContainer } from 'react-toastify';
import PrivateRoute from './components/PrivateRoute';
 // Import the PrivateRoute component

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/users" element={<User />} />
        <Route path="/cart" element={<CartPage />} />

        {/* Protected Route: User cannot access checkout or payment without items in the cart */}
        <Route
          path="/checkout"
          element={
            <PrivateRoute
              element={<CheckoutPage />}
              required={true} // Ensure cart is not empty
              redirectPath="/cart" // Redirect user to cart if the condition is not met
            />
          }
        />
        <Route
          path="/payment"
          element={
            <PrivateRoute
              element={<PaymentPage />}
              required={true} // Ensure cart is not empty
              redirectPath="/cart" // Redirect user to cart if the condition is not met
            />
          }
        />

        <Route path="/order-confirmed" element={<OrderConfirmedPage />} />
        <Route path="*" element={<h1 className="text-3xl font-bold">404 Not Found</h1>} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
