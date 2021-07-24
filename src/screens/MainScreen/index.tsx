import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {ActivityIndicator} from '../../components/ActivityIndicator';
import {
  addHeroToFavorite,
  fetchCharactersData,
  removeHeroFromFavorite,
} from '../../redux/hero/actions';
import {Store} from '../../redux/store/types';
// import FavoriteIcon from '@material-ui/icons/Favorite';
import green from '@material-ui/core/colors/green';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {HeroCard} from '../../components/HeroCard';
import './styles.css';
import { Navbar } from '../../components/NavBar';
export const MainScreen = () => {
  const dispatch = useDispatch();
  const {heroes, heroIsLoading, favorites} = useSelector(
    (store: Store) => store.hero,
  );
  const imgURL = 'https://starwars-visualguide.com/assets/img/characters/';
  useEffect(() => {
    dispatch(fetchCharactersData());
  }, []);

  const exists = (hero: any) => {
    if (favorites.filter(item => item.name === hero.name).length > 0) {
      console.log('true');
      return true;
    }
    console.log('false');
    return false;
  };
  const addToFav = (hero: any) => {
    dispatch(addHeroToFavorite(hero));
  };

  const removeFromFav = (hero: any) => {
    dispatch(removeHeroFromFavorite(hero));
  };
  function getId(url: any) {
    return url.split('/')[url.split('/').length - 2];
  }
  return (
    <div>
      {/* <HeroCard hero={heroes} /> */}

      {heroIsLoading ? (
        <ActivityIndicator />
      ) : (
        <div>
            <Navbar/>
            <ul className="container">
              {heroes.map((hero, index) => {
                return <HeroCard key={index} hero={hero} />;
              })}
            </ul>
          </div>
      )}
    </div>
  );
};
