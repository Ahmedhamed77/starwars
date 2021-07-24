import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  addHeroToFavorite,
  removeHeroFromFavorite,
} from '../../redux/hero/actions';
import {Store} from '../../redux/store/types';
import './heroCard.css';
import FavoriteIcon from '@material-ui/icons/Favorite';

interface HeroCardProps {
  hero: any;
}
export const HeroCard: React.FC<HeroCardProps> = ({hero}) => {
  const imgURL = 'https://starwars-visualguide.com/assets/img/characters/';
  const dispatch = useDispatch();
  const {favorites} = useSelector((store: Store) => store.hero);

  function getId(url: any) {
    return url.split('/')[url.split('/').length - 2];
  }

  console.log(hero, 'hero ===');
  const exists = (hero: any) => {
    if (favorites.filter(item => item.name === hero.name).length > 0) {
      return true;
    }
    return false;
  };
  const addToFav = (hero: any) => {
    dispatch(addHeroToFavorite(hero));
  };

  const removeFromFav = (hero: any) => {
    dispatch(removeHeroFromFavorite(hero));
  };
  return (
    
      <div className="card">
        <img
          className="img-hero"
          src={`${imgURL + getId(hero.url)}.jpg`}
          alt="hero"
        />
        <div className="detailsContainer">
          <div>
            <p className="hero-name">{hero.name}</p>
          </div>

          <div
            className="hero-icon"
            onClick={() =>
              exists(hero) ? removeFromFav(hero.name) : addToFav(hero)
            }>
            <FavoriteIcon style={{color: exists(hero) ? 'red' : 'grey'}} />
          </div>
        </div>
      </div>
  );
};
