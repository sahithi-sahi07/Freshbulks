import { Minus, Plus, Trash2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { formatINR, convertToINR } from '../utils/currency';
import OrderSuccess from '../components/OrderSuccess';

export default function Cart() {
  const { items, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();

  const handleCheckout = () => {
    clearCart();
    setShowSuccess(true);
  };

  const handleSuccessClose = () => {
    setShowSuccess(false);
    navigate('/');
  };

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <Link 
          to="/" 
          className="text-primary-500 hover:text-primary-600"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {items.map((item) => (
            <div 
              key={item.product.id} 
              className="flex items-center gap-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md mb-4"
            >
              <img
                src={item.product.image}
                alt={item.product.title}
                className="w-24 h-24 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h3 className="text-lg font-medium">{item.product.title}</h3>
                <p className="text-primary-500 font-bold">
                  {formatINR(convertToINR(item.product.price))}
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                    className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                    className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <Plus size={16} />
                  </button>
                  <button
                    onClick={() => removeFromCart(item.product.id)}
                    className="ml-4 p-1 text-red-600 hover:text-red-800"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold">
                  {formatINR(convertToINR(item.product.price * item.quantity))}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Order Summary</h3>
            <div className="flex justify-between mb-4">
              <span>Subtotal</span>
              <span>{formatINR(convertToINR(getTotalPrice()))}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <hr className="my-4 border-gray-200 dark:border-gray-700" />
            <div className="flex justify-between mb-4 text-lg font-bold">
              <span>Total</span>
              <span>{formatINR(convertToINR(getTotalPrice()))}</span>
            </div>
            <button 
              onClick={handleCheckout}
              className="w-full bg-primary-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-primary-600 transition-colors"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
      {showSuccess && <OrderSuccess onClose={handleSuccessClose} />}
    </div>
  );
}