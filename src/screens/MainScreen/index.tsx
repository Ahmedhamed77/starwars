import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {ActivityIndicator} from '../../components/ActivityIndicator';
import {
  fetchCharactersData,
} from '../../redux/hero/actions';
import {Store} from '../../redux/store/types';

import './styles.css';
import {Navbar} from '../../components/NavBar';
import {SearchBar} from '../../components/searchbar';
import {FilterButton} from '../../components/FilterButton';
import { Pagination } from '../../containers/PaginationButtonContainer';
import { CardHeroContainer } from '../../containers/CardHeroContainer';

export const MainScreen = () => {
  const dispatch = useDispatch();
  const {heroes, heroIsLoading} = useSelector(
    (store: Store) => store.hero,
  );
  const [query, setQuery] = useState('');
  const [data, setData] = useState(heroes);
  const [page,setPage] = useState(1);

  useEffect(() => {
    !heroes.length && dispatch(fetchCharactersData(1));
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
              return <CardHeroContainer key={index} hero={hero}  />;
            })}
          </ul>
          <Pagination page={page} setPage={setPage}/>
        </div>
        
      )}
      
    </div>
  );
};
