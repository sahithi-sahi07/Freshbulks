import { Star, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { formatINR, convertToINR } from '../utils/currency';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <div className="relative aspect-square mb-4">
          <img
            src={product.image}
            alt={product.title}
            className="object-cover w-full h-full rounded-lg"
          />
          <button
            onClick={handleAddToCart}
            className="absolute bottom-2 right-2 bg-primary-500 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Add to cart"
          >
            <ShoppingCart size={20} />
          </button>
        </div>
        <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 truncate group-hover:text-primary-500">
          {product.title}
        </h3>
        <div className="flex items-center mt-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={`${
                  i < Math.floor(product.rating.rate)
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-300 dark:text-gray-600'
                }`}
              />
            ))}
          </div>
          <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
            ({product.rating.count})
          </span>
        </div>
        <div className="mt-2">
          <span className="text-xl font-bold text-primary-500">
            {formatINR(convertToINR(product.price))}
          </span>
        </div>
      </div>
    </Link>
  );
}