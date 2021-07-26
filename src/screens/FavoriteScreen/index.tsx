import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {ActivityIndicator} from '../../components/ActivityIndicator';
import {HeroCard} from '../../components/HeroCard';
import { hero } from '../../redux/hero/types';
import {Store} from '../../redux/store/types';
import './favorite.css';

export const FavoriteScreen = () => {
  const favorites = useSelector(
    (store: Store) => store.heroFavorites?.favorites,
  );



  // const text = 'hello storage';
  // localStorage.setItem('hello',text);
  // const textData = localStorage.getItem('hello');


  const arr:any = [] ;
  for(let i = 0 ; i < localStorage.length ; i++){
    const key:any = localStorage.key(i);
    const value:any = localStorage.getItem(key);
    const data : any = JSON.stringify(value);

    arr.push(data)
  }
  console.log(arr, 'data === ');
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
              return <HeroCard key={index} hero={favorite} />;
            })
          )}
        </ul>
      </div>
    </div>
  );
};
