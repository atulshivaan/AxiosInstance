import { useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
  const navigate = useNavigate();

  const handleProceedToPayment = () => {
    navigate('/payment'); 
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>

      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
        <p className="mb-4">Your order has been Approved. Please proceed with payment.</p>
        <div className="mb-4">
          <p className="text-lg font-semibold">Total: $123.45</p>
        </div>
        <button
          onClick={handleProceedToPayment}
          className="flex justify-center mx-[32%] mt-[10%] items-center w-[30%] px-4 py-2 bg-green-600 text-white text-lg rounded hover:bg-green-700 transition"
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
