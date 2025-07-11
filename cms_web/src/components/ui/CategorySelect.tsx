import React from 'react';
import { ChevronDown } from 'lucide-react';
import { CATEGORIES } from '../../constants/categories';

interface CategorySelectProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
  required?: boolean;
}

function CategorySelect({ value, onChange, className, required }: CategorySelectProps) {
  return (
    <div className={`relative ${className || ''}`}>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
      >
        <option value="">Select a category</option>
        {CATEGORIES.map((category) => (
          <option key={category.id} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <ChevronDown className="w-4 h-4 text-gray-400" />
      </div>
    </div>
  );
}

export default CategorySelect;