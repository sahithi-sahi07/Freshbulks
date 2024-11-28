import { CheckCircle2 } from 'lucide-react';

interface OrderSuccessProps {
  onClose: () => void;
}

export default function OrderSuccess({ onClose }: OrderSuccessProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl max-w-md w-full mx-4 animate-bounce-in">
        <div className="text-center">
          <CheckCircle2 className="mx-auto text-green-500 mb-4" size={64} />
          <h2 className="text-2xl font-bold mb-2">Hurray! Order Placed</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Thank you for shopping with FreshBulk!
          </p>
          <button
            onClick={onClose}
            className="bg-primary-500 text-white px-6 py-2 rounded-lg hover:bg-primary-600 transition-colors"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
}