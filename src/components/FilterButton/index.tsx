import React from 'react';
import './filter.css';
export interface FilterButtonProps {
  categories: any;
  filterItems: any;
}
export const FilterButton: React.FC<FilterButtonProps> = ({
  categories,
  filterItems,
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
              onClick={() => filterItems(category)}>
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
};
