import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { fetchCharactersData } from '../../redux/hero/actions';
import { heroPagination } from '../../redux/pagination/actions';
import {Store} from '../../redux/store/types';
import './button.css';

export interface ButtonPaginationProps {
  page:number;
  setPage:any; 
}
export const ButtonPagination: React.FC<ButtonPaginationProps> = ({
  page,
  setPage
}) => {
  const dispatch = useDispatch();
  const isLoading = useSelector((store: Store) => store.hero.heroIsLoading);
  const handleNextPage = () => {
    if (page === 9) {
      setPage(9);
      dispatch(fetchCharactersData(9));
    } else {
      setPage(page + 1);
      dispatch(fetchCharactersData(page + 1));
    }
  };
  const handlePrevPage = () => {
    if (page <= 1) {
      setPage(1);
      dispatch(heroPagination(1));
    } else {
      setPage(page - 1);
      dispatch(heroPagination(page - 1));
    }
  };
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
