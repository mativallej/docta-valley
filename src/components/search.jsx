'use client';
import { useState } from 'react';
import { Search as SearchIcon } from 'lucide-react';

export default function Search({ placeholder = "Search...", onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchTerm);
    }
  };

  return (
    <form onSubmit={handleSearch} className="relative w-full max-w-md">
      <input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full py-1.5 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-full focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="absolute inset-y-0 left-0 flex items-center pl-3"
      >
        <SearchIcon size={20} className="text-gray-400" />
      </button>
    </form>
  );
}