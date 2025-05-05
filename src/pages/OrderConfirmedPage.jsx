import { useNavigate } from 'react-router-dom';

const OrderConfirmedPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/'); 
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Order Confirmed</h1>

      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Thank you for your order!</h2>
        <p>Your order has been confirmed. You will receive an email with the details shortly.</p>

        <div className="mt-6">
          <button
            onClick={handleGoHome}
            className="flex justify-center mx-[32%] mt-[1%] items-center w-[30%] px-4 py-2 bg-blue-600 font-sans text-white text-lg rounded-sm hover:bg-green-700 transition"
          >
            Go to Homepage
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmedPage;
