import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {
  fetchCharactersData,
  filterHeroesAction,
} from '../../redux/hero/actions';
import {Store} from '../../redux/store/types';
import {MainScreenContainer} from './Container';

export const MainScreen = () => {
  //local state
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();

  //global state
  const {heroes, heroIsLoading, heroCopy} = useSelector(
    (store: Store) => store.hero,
  );
  const {favorites} = useSelector((store: Store) => store.heroFavorites);

  const handleNextPage = () => setPage(page + 1);

  const handlePrevPage = () => setPage(page - 1);

  useEffect(() => {
    dispatch(fetchCharactersData(page));
  }, [page, dispatch]);

  let uniques = Array.from(new Set(heroCopy.map(hero => hero.gender)));
  let categories = ['all', ...uniques];

  const handleFilterItems = (category: string) => {
    dispatch(filterHeroesAction(category));
  };

  console.log(page, 'page');

  return (
    <MainScreenContainer
      heroes={heroes}
      handleFilterItems={handleFilterItems}
      page={page}
      handleNextPage={handleNextPage}
      handlePrevPage={handlePrevPage}
      favorites={favorites}
      isLoading={heroIsLoading}
      categories={categories}
    />
  );
};
