import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {HeroCard} from '../../components/HeroItem';
import {Hero} from '../../redux/hero/types';
import {
  addHeroFavorite,
  removeHeroFavorite,
} from '../../redux/Favorite/actions';
import {planetInfo} from '../../redux/planet/actions';
import {Store} from '../../redux/store/types';

interface HeroCardContainerProps {
  favorties: Hero[];
  hero: Hero;
  index: number;
}
export const CardHeroContainer: React.FC<HeroCardContainerProps> = ({
  favorties,
  hero,
  index,
}) => {
  const dispatch = useDispatch();

  const {planet} = useSelector((store: Store) => store.planetHero);

  useEffect(() => {
    dispatch(planetInfo(hero.homeworld));
  }, []);

  const exists = (name: string) => favorties?.some(item => item.name === name);

  const addToFav = (hero: Hero) => {
    dispatch(addHeroFavorite(hero));
  };

  const removeFromFav = (hero: Hero) => {
    dispatch(removeHeroFavorite(hero));
  };
  return (
    <HeroCard
      planet={planet}
      index={index}
      hero={hero}
      handleRemoveFav={removeFromFav}
      handleAddFav={addToFav}
      exists={exists}
    />
  );
};
