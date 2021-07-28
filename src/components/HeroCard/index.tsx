import React from 'react';

import './heroCard.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {hero} from '../../redux/hero/types';

interface HeroCardProps {
  imageUrl: string;
  hero: hero;
  getId: (url: string) => void;
  exists: (hero: hero) => boolean;
  handleRemoveFav: (hero: hero) => void;
  handleAddFav: (hero: hero) => void;
  planet: any;
  index: number;
}
export const HeroCard: React.FC<HeroCardProps> = ({
  imageUrl,
  hero,
  getId,
  exists,
  handleRemoveFav,
  handleAddFav,
  planet,
  index,
}) => {
  return (
    <div className="card">
      <img
        className="img-hero"
        src={`${imageUrl + getId(hero.url)}.jpg`}
        alt="hero"
      />
      <div className="detailsContainer">
        <div>
          <p className="hero-name">{hero.name}</p>
        </div>

        <div
          className="hero-icon"
          onClick={() => {
            exists(hero) ? handleRemoveFav(hero) : handleAddFav(hero);
            console.log(Boolean(exists(hero)));
          }}>
          <FavoriteIcon style={{color: exists(hero) ? 'red' : 'grey'}} />
        </div>
      </div>
      <div className="planet">
        <p className="heroPlanetText">
          HomeWorld Hero is{' '}
          <span className="planetName">{planet[index]?.name}</span>
        </p>
      </div>
    </div>
  );
};
