import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {HeroCard} from '../../components/HeroCard';
import {
  addHeroFavorite,
  removeHeroFavorite,
} from '../../redux/heroFavorite/actions';
import { Store } from '../../redux/store/types';

interface HeroCardContainerProps {
  data:any,
  hero: any;
}
export const CardHeroContainer: React.FC<HeroCardContainerProps> = ({data,hero}) => {
  const imgURL = 'https://starwars-visualguide.com/assets/img/characters/';

  console.log(hero,'hero from card')
  const {favorites} = useSelector((store: Store) => store.heroFavorites);
  const dispatch = useDispatch();
 
  console.log(data,'what is data ===')
  const exists = (hero: any) => {
    if (data?.filter((item: { name: any; }) => item.name === hero.name).length > 0) {
      return true;
    }
    return false;
  };

  function getId(url: any) {
    return url.split('/')[url.split('/').length - 2];
  }

  const saveToLocalStorage = (items: any) => {
    localStorage.setItem('star-wars', JSON.stringify(items));
  };


  const addToFav = (hero: any) => {
    const data = JSON.parse(localStorage.getItem('star-wars') || '[]');
    const items = [...data, hero];
    dispatch(addHeroFavorite(hero));
    saveToLocalStorage(items);
  };

  const removeFromFav = (hero: any) => {
    dispatch(removeHeroFavorite(hero));
    const newArrList = data.filter((item: { name: any; }) => item.name !== hero.name);
    saveToLocalStorage(newArrList);
  };
  return (
    <HeroCard
      imageUrl={imgURL}
      hero={hero}
      getId={getId}
      handleRemoveFav={removeFromFav}
      handleAddFav={addToFav}
      exists={exists}
    />
  );
};
