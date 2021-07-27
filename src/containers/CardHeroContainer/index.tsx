import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {HeroCard} from '../../components/HeroCard';
import {
  addHeroFavorite,
  removeHeroFavorite,
} from '../../redux/heroFavorite/actions';

interface HeroCardContainerProps {
  hero: any;
}
export const CardHeroContainer: React.FC<HeroCardContainerProps> = ({hero}) => {
  const imgURL = 'https://starwars-visualguide.com/assets/img/characters/';


  const dispatch = useDispatch();
  const data = JSON.parse(localStorage.getItem('star-wars') || '[]');
  const [arr, setArr] = useState<any[]>([]);
  useEffect(() => {
    setArr(data);
    console.log('here');
  }, []);

  function getId(url: any) {
    return url.split('/')[url.split('/').length - 2];
  }

  const saveToLocalStorage = (items: any) => {
    localStorage.setItem('star-wars', JSON.stringify(items));
  };

  const exists = (hero: any) => {
    if (arr?.filter(item => item.name === hero.name).length > 0) {
      return true;
    }
    return false;
  };

  const addToFav = (hero: any) => {
    const data = JSON.parse(localStorage.getItem('star-wars') || '[]');
    const items = [...data, hero];
    dispatch(addHeroFavorite(hero));
    saveToLocalStorage(items);
  };

  const removeFromFav = (hero: any) => {
    dispatch(removeHeroFavorite(hero));
    const newArrList = arr.filter(item => item.name !== hero.name);
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
