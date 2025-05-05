import { useNavigate } from 'react-router-dom';
import { useCart } from '../utils/CartContext';

const PaymentPage = () => {
  const { clearCart } = useCart();
  const navigate = useNavigate();

  const handlePaymentMethod = (method) => {
    console.log('Selected Payment Method:', method);


    clearCart();

    navigate('/order-confirmed');
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Payment Options</h1>
      
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Select Payment Method</h2>

        <div className="flex flex-col mt-[10%] gap-4">
          <button
            onClick={() => handlePaymentMethod('UPI')}
            className="flex justify-center mx-[32%] mt-[1%] items-center w-[30%] px-4 py-2 bg-blue-600 text-white text-lg rounded hover:bg-green-700 transition"
          >
            Pay with UPI
          </button>
          <button
            onClick={() => handlePaymentMethod('Card')}
            className="flex justify-center mx-[32%] mt-[1%] items-center w-[30%] px-4 py-2 bg-yellow-600 text-white text-lg rounded hover:bg-green-700 transition"
          >
            Pay with Card
          </button>
        </div>

        <button
          onClick={() => handlePaymentMethod('UPI')}
          className="flex justify-center mx-[32%] mt-[1%] items-center w-[30%] px-4 py-2 bg-gray-600 text-white text-lg rounded hover:bg-green-700 transition"
        >
          Proceed
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
