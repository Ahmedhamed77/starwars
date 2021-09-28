import React from 'react';

import {ActivityIndicator} from '../../../components/ActivityIndicator';

import {FilterButton} from '../Components/FilterButton';
import {Navbar} from '../../../components/Navbar';
import {SearchBar} from '../../../components/searchbar';

import {hero} from '../../../redux/hero/types';
import {RenderHero} from '../Components/RenderHeros';

export interface MainScreenContainerProps {
  heroes: hero[];
  isLoading: boolean;
  categories: string[];
  favorites: hero[];
  page: number;
  handleFilterItems: (type: string) => void;
  handleNextPage: () => void;
  handlePrevPage: () => void;
}
export const MainScreenContainer: React.FC<MainScreenContainerProps> = ({
  heroes,
  isLoading,
  categories,
  favorites,
  page,
  handleNextPage,
  handleFilterItems,
  handlePrevPage,
}) => {
  return (
    <div>
      <Navbar />
      <SearchBar heroes={heroes} />
      <FilterButton
        categories={categories}
        handleFilterItems={handleFilterItems}
      />
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <RenderHero
          page={page}
          heroes={heroes}
          favorites={favorites}
          isLoading={isLoading}
          handleNextPage={handleNextPage}
          handlePrevPage={handlePrevPage}
        />
      )}
    </div>
  );
};
