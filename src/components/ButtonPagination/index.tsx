import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {heroPagination} from '../../redux/hero/actions';
import {hero} from '../../redux/hero/reducers';
import {Store} from '../../redux/store/types';
import './button.css'

export interface ButtonPaginationProps {
  // page:string,
}
export const ButtonPagination: React.FC<ButtonPaginationProps> = ({}) => {
  const dispatch = useDispatch();
  const isLoading = useSelector((store: Store) => store.hero.heroIsLoading);
  const [page, setPage] = useState(1);
  const handleNextPage = () => {
      if(page === 9){
          setPage(9);
          dispatch(heroPagination(9));
      }
      else{
        setPage(prev => prev + 1);
        dispatch(heroPagination(page + 1));
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
      className='prevNextButton'
        disabled={isLoading}
        onClick={handlePrevPage}>
        Prev
      </button>
      <button
        className='prevNextButton'
        disabled={isLoading}
        onClick={handleNextPage}>
        next
      </button> 
    </div>
  );
};
