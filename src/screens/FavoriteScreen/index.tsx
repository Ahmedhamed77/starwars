import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {CardHeroContainer} from '../../containers/CardHero';
import {Store} from '../../redux/store/types';
import './favorite.css';

export const FavoriteScreen = () => {
  const data = JSON.parse(localStorage.getItem('star-wars') || '[]');
  const {favorites} = useSelector((store: Store) => store.heroFavorites);
  return (
    <div className="containerFavorite">
      <div>
        <h1 className="header-favorite">Favorites</h1>
      </div>
      <div>
        <ul className="containerCard">
          {!favorites?.length ? (
            <p className="no-favorite">
              you don&#x27;t have favorites yet &#44; please add some.
            </p>
          ) : (
            favorites?.map((favorite: any, index: number) => {
              return (
                <CardHeroContainer
                  index={index}
                  key={index}
                  hero={favorite}
                  favorties={favorites}
                />
              );
            })
          )}
        </ul>
      </div>
    </div>
  );
};
