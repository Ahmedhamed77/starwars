import React from 'react';
import './heroCard.css';
import FavoriteIcon from '@material-ui/icons/Favorite';

interface HeroCardProps {
  imageUrl: string;
  hero: any;
  getId: (url: string) => void;
  exists: any;
  handleRemoveFav: any;
  handleAddFav: any;
}
export const HeroCard: React.FC<HeroCardProps> = ({
  imageUrl,
  hero,
  getId,
  exists,
  handleRemoveFav,
  handleAddFav,
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
    </div>
  );
};
