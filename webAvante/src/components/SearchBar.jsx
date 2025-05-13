import { Search } from 'lucide-react';

function SearchBar() {
  return (
    <div className="flex items-center gap-2 border border-gray-300 rounded px-3 py-1 bg-white">
      <Search className="text-gray-500" size={20} />
      <input
        type="text"
        placeholder="Buscar..."
        className="flex-1 outline-none text-black bg-transparent"
      />
    </div>
  );
}

export default SearchBar;