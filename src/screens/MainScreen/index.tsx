import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {ActivityIndicator} from '../../components/ActivityIndicator';
import {
  addHeroToFavorite,
  fetchCharactersData,
  fetchSearchedHeroes,
  removeHeroFromFavorite,
} from '../../redux/hero/actions';
import {Store} from '../../redux/store/types';
// import FavoriteIcon from '@material-ui/icons/Favorite';
import green from '@material-ui/core/colors/green';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {HeroCard} from '../../components/HeroCard';
import './styles.css';
import {Navbar} from '../../components/NavBar';
import {ButtonPagination} from '../../components/ButtonPagination';
import {SearchBar} from '../../components/searchbar';
import {FilterButton} from '../../components/FilterButton';
import {hero} from '../../redux/hero/reducers';

export const MainScreen = () => {
  const dispatch = useDispatch();
  const {heroes, heroIsLoading, favorites} = useSelector(
    (store: Store) => store.hero,
  );
  const [query, setQuery] = useState('');
  const [data, setData] = useState(heroes);

  useEffect(() => {
    !heroes.length && dispatch(fetchCharactersData());
    setData(heroes);
  }, [heroes]);

  let uniques = Array.from(new Set(heroes.map(hero => hero.gender)));
  let categories = ['all', ...uniques];

  const filterItems = (category: any) => {
    if (category === 'all') {
      setData(heroes);
      return;
    }
    const newItems = heroes.filter(item => item.gender === category);
    setData(newItems);
  };

  return (
    <div>
      <Navbar />
      
      <SearchBar heroes={heroes} query={query} setQuery={setQuery} />
      <FilterButton categories={categories} filterItems={filterItems} />
      {heroIsLoading ? (
        <ActivityIndicator />
      ) : (
        <div>
          <ul className="container">
            {data.map((hero, index) => {
              return <HeroCard key={index} hero={hero} />;
            })}
          </ul>
        </div>
      )}
    </div>
  );
};
