import React from 'react';
import {useSelector} from 'react-redux';
import {ActivityIndicator} from '../../components/ActivityIndicator';
import {HeroCard} from '../../components/HeroCard';
import {Store} from '../../redux/store/types';
import './favorite.css';
export const FavoriteScreen = () => {
  const {favorites, heroIsLoading} = useSelector((store: Store) => store.hero);

  return (
    <div className="containerFavorite">
      <div>
        <h1 className="header-favorite">Favorites</h1>
      </div>
      <div>
        <ul className="containerCard">
          {!favorites.length ? (
            
              <p className='no-favorite'>you don&#x27;t have favorites yet &#44; please add some.</p>
           
          ) : (
            favorites.map((favorite, index) => {
              return <HeroCard key={index} hero={favorite} />;
            })
          )}
        </ul>
      </div>
    </div>
  );
};
