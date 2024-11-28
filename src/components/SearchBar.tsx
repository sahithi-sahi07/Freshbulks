import { Search } from 'lucide-react';
import { useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search fresh produce..."
          className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-500 dark:text-gray-400 hover:text-primary-500"
        >
          <Search size={20} />
        </button>
      </div>
    </form>
  );
}