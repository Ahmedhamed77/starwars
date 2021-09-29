import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {Store} from '../../redux/store/types';
import {filterHeroesFavorties} from '../../redux/Favorite/actions';
import {FavoriteScreenContainer} from './Container';

export const FavoriteScreen = () => {
  const dispatch = useDispatch();
  const {favorites, favoritesCopy} = useSelector(
    (store: Store) => store.heroFavorites,
  );

  let uniques = Array.from(new Set(favoritesCopy.map(hero => hero.gender)));
  let categories = ['all', ...uniques];

  const handleFilterItems = (category: string) => {
    dispatch(filterHeroesFavorties(category));
  };
  return (
    <FavoriteScreenContainer
      favorites={favorites}
      categories={categories}
      handleFilterItems={handleFilterItems}
    />
  );
};
