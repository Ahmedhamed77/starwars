import React from 'react';

import './button.css';

export interface ButtonPaginationProps {
  handleNextPage: any;
  handlePrevPage: any;
  isLoading: boolean;
  page: number;
}
export const Pagination: React.FC<ButtonPaginationProps> = ({
  handleNextPage,
  handlePrevPage,
  isLoading,
  page,
}) => {
  return (
    <div className="btn-container">
      {page > 1 && (
        <button
          className="button"
          disabled={isLoading}
          onClick={handlePrevPage}>
          ‹
        </button>
      )}
      {page < 9 && (
        <button
          className="button"
          disabled={isLoading}
          onClick={handleNextPage}>
          ›
        </button>
      )}
    </div>
  );
};
