import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {fetchSearchedHeroes} from '../../redux/hero/actions';
import {ButtonPagination} from '../ButtonPagination';
import './search.css';

export interface SearchBarProps {
  heroes: {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    films: [];
    species: [];
    vehicles: [];
    starships: [];
    created: string;
    edited: string;
    url: string;
  }[];
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  heroes,
  query,
  setQuery,
}) => {
  const dispatch = useDispatch();
  return (
    <form className="search-form" onSubmit={e => e.preventDefault()}>
      <div className="form-bar">
        <input
          type="text"
          className="form-input"
          value={query}
          placeholder="search your character by name"
          onChange={e => {
            setQuery(e.target.value);
            dispatch(fetchSearchedHeroes(query));
          }}
        />
      </div>

      {heroes.length ? <div className="error"></div> : <p> sorry no matches</p>}
    </form>
  );
};
