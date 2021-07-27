import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ButtonPagination} from '../../components/ButtonPagination';
import {fetchCharactersData} from '../../redux/hero/actions';
import {Store} from '../../redux/store/types';

export interface ButtonPaginationProps {
  page: number;
  setPage: any;
}
export const Pagination: React.FC<ButtonPaginationProps> = ({
  page,
  setPage,
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
      dispatch(fetchCharactersData(1));
    } else {
      setPage(page - 1);
      dispatch(fetchCharactersData(page - 1));
    }
  };
  return (
    <ButtonPagination
      isLoading={isLoading}
      handleNextPage={handleNextPage}
      handlePrevPage={handlePrevPage}
    />
  );
};
