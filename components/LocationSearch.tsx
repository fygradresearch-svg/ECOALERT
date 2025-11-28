
import React, { useState } from 'react';
import { Search, MapPin } from 'lucide-react';
import { HUANCAYO_LANDMARKS } from '../constants';
import { Coordinates } from '../types';

interface LocationSearchProps {
  onLocationSelect: (location: Coordinates, address: string) => void;
}

const LocationSearch: React.FC<LocationSearchProps> = ({ onLocationSelect }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<typeof HUANCAYO_LANDMARKS>([]);
  const [isFocused, setIsFocused] = useState(false);

  const handleSearch = (text: string) => {
    setQuery(text);
    if (text.length > 1) {
      const filtered = HUANCAYO_LANDMARKS.filter(
        l => l.name.toLowerCase().includes(text.toLowerCase()) || 
             l.address.toLowerCase().includes(text.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  const handleSelect = (landmark: typeof HUANCAYO_LANDMARKS[0]) => {
    setQuery(landmark.name);
    setSuggestions([]);
    onLocationSelect({ lat: landmark.lat, lng: landmark.lng }, landmark.address);
    setIsFocused(false);
  };

  return (
    <div className="relative w-full z-20">
      <div className={`flex items-center bg-white border rounded-xl px-3 py-2 shadow-sm transition-all ${isFocused ? 'ring-2 ring-emerald-500 border-emerald-500' : 'border-slate-200'}`}>
        <Search size={18} className="text-slate-400 mr-2" />
        <input
          type="text"
          placeholder="Buscar dirección en Huancayo..."
          className="w-full text-sm outline-none text-slate-700 placeholder:text-slate-400"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          onFocus={() => setIsFocused(true)}
          // Delay blur to allow click on suggestion
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
        />
        {/* Google Branding Simulation */}
        <span className="text-[10px] text-slate-300 font-bold select-none ml-2">GOOGLE</span>
      </div>

      {isFocused && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-slate-100 rounded-xl shadow-xl overflow-hidden max-h-60 overflow-y-auto">
          {suggestions.map((landmark, idx) => (
            <button
              key={idx}
              className="w-full text-left px-4 py-3 hover:bg-slate-50 flex items-center gap-3 border-b border-slate-50 last:border-0 transition-colors"
              onClick={() => handleSelect(landmark)}
            >
              <div className="bg-emerald-100 p-1.5 rounded-full flex-shrink-0">
                <MapPin size={14} className="text-emerald-600" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-700 leading-none">{landmark.name}</p>
                <p className="text-xs text-slate-400 mt-1">{landmark.address}, Huancayo</p>
              </div>
            </button>
          ))}
          <div className="bg-slate-50 px-3 py-1 text-[9px] text-slate-400 text-right">
            powered by Google
          </div>
        </div>
      )}
    </div>
  );
};

export default LocationSearch;
