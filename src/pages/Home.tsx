import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import { products } from '../data/products';

export default function Home() {
  const [category, setCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredProducts = products
    .filter(p => category === 'all' || p.category.toLowerCase() === category.toLowerCase())
    .filter(p => 
      searchQuery === '' || 
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <h1 className="text-3xl font-bold">Fresh Produce</h1>
          <SearchBar onSearch={setSearchQuery} />
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setCategory('all')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              category === 'all'
                ? 'bg-primary-500 text-white'
                : 'bg-gray-200 dark:bg-gray-700 hover:bg-primary-100 dark:hover:bg-primary-900'
            }`}
          >
            All Products
          </button>
          <button
            onClick={() => setCategory('fruits')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              category === 'fruits'
                ? 'bg-primary-500 text-white'
                : 'bg-gray-200 dark:bg-gray-700 hover:bg-primary-100 dark:hover:bg-primary-900'
            }`}
          >
            Fruits
          </button>
          <button
            onClick={() => setCategory('vegetables')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              category === 'vegetables'
                ? 'bg-primary-500 text-white'
                : 'bg-gray-200 dark:bg-gray-700 hover:bg-primary-100 dark:hover:bg-primary-900'
            }`}
          >
            Vegetables
          </button>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600 dark:text-gray-400">
              No products found. Try adjusting your search or filters.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}