import React from 'react';

import './button.css';

export interface ButtonPaginationProps {
  handleNextPage:any;
  handlePrevPage:any;
  isLoading:boolean; 
}
export const ButtonPagination: React.FC<ButtonPaginationProps> = ({
  handleNextPage,
  handlePrevPage,
  isLoading
}) => {
  return (
    <div className="btn-container">
      <button
        className="button"
        disabled={isLoading}
        onClick={handlePrevPage}>
        ‹
      </button>
      <button
        className="button"
        disabled={isLoading}
        onClick={handleNextPage}>
        ›
      </button>
    </div>
  );
};
