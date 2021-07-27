import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {fetchSearchedHeroes} from '../../redux/hero/actions';
import {ButtonPagination} from '../ButtonPagination';
import './search.css';

export interface SearchBarProps {
  heroes: any;
  query: any;
  setQuery: any;
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
