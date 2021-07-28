import React from 'react';
import {useSelector} from 'react-redux';

import {ButtonPagination} from '../../components/ButtonPagination';
import {Store} from '../../redux/store/types';

export interface ButtonPaginationProps {
  handleNextPage:() => void,
  handlePrevPage:() => void,
}
export const Pagination: React.FC<ButtonPaginationProps> = ({
  handleNextPage,
  handlePrevPage,
}) => {
  const isLoading = useSelector((store: Store) => store.hero.heroIsLoading);
  return (
    <ButtonPagination
      isLoading={isLoading}
      handleNextPage={handleNextPage}
      handlePrevPage={handlePrevPage}
    />
  );
};
