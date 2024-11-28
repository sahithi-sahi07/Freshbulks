import { useParams, useNavigate } from 'react-router-dom';
import { Star, ShoppingCart, ArrowLeft } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import CategoryBadge from '../components/CategoryBadge';
import { formatINR, convertToINR } from '../utils/currency';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Product not found</h2>
        <button
          onClick={() => navigate('/')}
          className="text-primary-500 hover:text-primary-600 flex items-center justify-center gap-2"
        >
          <ArrowLeft size={20} />
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <button
        onClick={() => navigate('/')}
        className="mb-6 text-gray-600 dark:text-gray-400 hover:text-primary-500 flex items-center gap-2"
      >
        <ArrowLeft size={20} />
        Back to Products
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="aspect-square">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
        
        <div className="space-y-6">
          <div>
            <CategoryBadge category={product.category} />
            <h1 className="text-3xl font-bold mt-2">{product.title}</h1>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className={`${
                    i < Math.floor(product.rating.rate)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300 dark:text-gray-600'
                  }`}
                />
              ))}
            </div>
            <span className="text-gray-600 dark:text-gray-400">
              ({product.rating.count} reviews)
            </span>
          </div>

          <p className="text-3xl font-bold text-primary-500">
            {formatINR(convertToINR(product.price))}
          </p>

          <p className="text-gray-600 dark:text-gray-400 text-lg">
            {product.description}
          </p>

          <button
            onClick={() => addToCart(product)}
            className="w-full bg-primary-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-primary-600 transition-colors flex items-center justify-center gap-2"
          >
            <ShoppingCart size={20} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}