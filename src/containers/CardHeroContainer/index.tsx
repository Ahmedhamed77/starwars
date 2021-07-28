import React from 'react';
import {useDispatch} from 'react-redux';

import {HeroCard} from '../../components/HeroCard';
import {hero} from '../../redux/hero/types';
import {
  addHeroFavorite,
  removeHeroFavorite,
} from '../../redux/heroFavorite/actions';


interface HeroCardContainerProps {
  data: hero[];
  hero: hero;
}
export const CardHeroContainer: React.FC<HeroCardContainerProps> = ({
  data,
  hero,
}) => {
  const dispatch = useDispatch();

  const imgURL = 'https://starwars-visualguide.com/assets/img/characters/';

  const exists = (hero: hero) => {
    if (
      data?.filter((item: {name: any}) => item.name === hero.name).length > 0
    ) {
      return true;
    }
    return false;
  };

  function getId(url: any) {
    return url.split('/')[url.split('/').length - 2];
  }

  const saveToLocalStorage = (items: hero[]) => {
    localStorage.setItem('star-wars', JSON.stringify(items));
  };

  const addToFav = (hero: hero) => {
    const data = JSON.parse(localStorage.getItem('star-wars') || '[]');
    const items = [...data, hero];
    dispatch(addHeroFavorite(hero));
    saveToLocalStorage(items);
  };

  const removeFromFav = (hero: hero) => {
    dispatch(removeHeroFavorite(hero));
    const newArrList = data.filter(
      (item: {name: any}) => item.name !== hero.name,
    );
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
