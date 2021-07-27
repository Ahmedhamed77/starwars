import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ButtonPagination} from '../../components/ButtonPagination';
import {fetchCharactersData} from '../../redux/hero/actions';
import {Store} from '../../redux/store/types';

export interface ButtonPaginationProps {

  handleNextPage:any,
  handlePrevPage:any,
}
export const Pagination: React.FC<ButtonPaginationProps> = ({
  handleNextPage,
  handlePrevPage,
}) => {
  const dispatch = useDispatch();
  const isLoading = useSelector((store: Store) => store.hero.heroIsLoading);
  return (
    <ButtonPagination
      isLoading={isLoading}
      handleNextPage={handleNextPage}
      handlePrevPage={handlePrevPage}
    />
  );
};
