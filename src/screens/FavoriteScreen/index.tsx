import React from 'react';
import {HeroCard} from '../../components/HeroCard';
import { CardHeroContainer } from '../../containers/CardHeroContainer';
import './favorite.css';

export const FavoriteScreen = () => {
  const data = JSON.parse(localStorage.getItem('star-wars')|| '[]');
  return (
    <div className="containerFavorite">
      <div>
        <h1 className="header-favorite">Favorites</h1>
      </div>
      <div>
        <ul className="containerCard">
          {!data?.length ? (
            <p className="no-favorite">
              you don&#x27;t have favorites yet &#44; please add some.
            </p>
          ) : (
            data?.map((favorite: any, index: number) => {
              return <CardHeroContainer key={index} hero={favorite} />;
            })
          )}
        </ul>
      </div>
    </div>
  );
};
