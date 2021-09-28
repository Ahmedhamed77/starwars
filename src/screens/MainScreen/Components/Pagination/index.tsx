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
      <button
        className={Boolean(page <= 1) ? ' button disabled_button ' : 'button'}
        disabled={isLoading || Boolean(page <= 1)}
        onClick={handlePrevPage}>
        ‹
      </button>

      <button
        className={Boolean(page >= 9) ? ' button disabled_button ' : 'button'}
        disabled={isLoading || Boolean(page >= 9)}
        onClick={handleNextPage}>
        ›
      </button>
    </div>
  );
};
