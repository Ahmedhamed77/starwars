import React from 'react';
import {useDispatch} from 'react-redux';

import {fetchSearchedHeroes} from '../../redux/hero/actions';
import {Hero} from '../../redux/hero/types';
import './search.css';

export interface SearchBarProps {
  heroes: Hero[];
}

export const SearchBar: React.FC<SearchBarProps> = ({heroes}) => {
  const dispatch = useDispatch();
  return (
    <form className="search-form" onSubmit={e => e.preventDefault()}>
      <div className="form-bar">
        <input
          type="text"
          className="form-input"
          placeholder="search your character by name..."
          onChange={e => {
            dispatch(fetchSearchedHeroes(e.target.value));
          }}
        />
      </div>

      {heroes.length ? null : (
        <p className="error_text"> sorry we couldn&#x27;t find your match</p>
      )}
    </form>
  );
};
