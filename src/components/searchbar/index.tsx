import React, {useState} from 'react';
import {useDispatch} from 'react-redux';

import {fetchSearchedHeroes} from '../../redux/hero/actions';
import {hero} from '../../redux/hero/types';
import './search.css';

export interface SearchBarProps {
  heroes: hero[];
}

export const SearchBar: React.FC<SearchBarProps> = ({heroes}) => {
  const dispatch = useDispatch();
  return (
    <form className="search-form" onSubmit={e => e.preventDefault()}>
      <div className="form-bar">
        <input
          type="text"
          className="form-input"
          placeholder="search your character by name"
          onChange={e => {
            dispatch(fetchSearchedHeroes(e.target.value));
          }}
        />
      </div>

      {heroes.length ? <div className="error" /> : <p> sorry no matches</p>}
    </form>
  );
};
