import React from 'react';

import './filter.css';
export interface FilterButtonProps {
  categories: string[];
  handleFilterItems: (type: string) => void;
}
export const FilterButton: React.FC<FilterButtonProps> = ({
  categories,
  handleFilterItems,
}) => {
  return (
    <div className="filter-container">
      <p className="filter-text">Filter Hero</p>
      <div>
        {categories.map((category: any, index: number) => {
          return (
            <button
              type="button"
              className="filter-btn"
              key={index}
              onClick={() => handleFilterItems(category)}>
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
};
