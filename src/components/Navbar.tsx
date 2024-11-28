import { ShoppingCart, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const { getTotalItems } = useCart();

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Leaf className="text-green-500" size={32} />
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              FreshBulk
            </span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Link to="/cart" className="relative">
              <ShoppingCart className="text-gray-700 dark:text-gray-200" size={24} />
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}