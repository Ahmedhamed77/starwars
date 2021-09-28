import React from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';

import {hero} from '../../redux/hero/types';
import {getId} from '../../utils/getPlantId';
import './heroItem.css';

interface HeroCardProps {
  hero: hero;
  exists: (name: string) => boolean;
  handleRemoveFav: (hero: hero) => void;
  handleAddFav: (hero: hero) => void;
  planet: any;
  index: number;
}
export const HeroCard: React.FC<HeroCardProps> = ({
  hero,
  exists,
  handleRemoveFav,
  handleAddFav,
  planet,
  index,
}) => {
  const imgURL = 'https://starwars-visualguide.com/assets/img/characters/';

  const src = `${imgURL + getId(hero.url)}.jpg`;

  return (
    <div className="card">
      <img className="img-hero" src={src} alt="hero" />
      <div className="detailsContainer">
        <div>
          <p className="hero-name">{hero.name}</p>
        </div>
        <div
          className="hero-icon"
          onClick={() => {
            exists(hero.name) ? handleRemoveFav(hero) : handleAddFav(hero);
          }}>
          <FavoriteIcon style={{color: exists(hero.name) ? 'red' : 'grey'}} />
        </div>
      </div>
      <div className="planet">
        <p className="heroPlanetText">
          <span className="planetName">{planet[index]?.name}</span>
        </p>
      </div>
    </div>
  );
};
