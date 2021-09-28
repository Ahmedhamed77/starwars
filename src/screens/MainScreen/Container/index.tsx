import React from 'react';

import {ActivityIndicator} from '../../../components/ActivityIndicator';
import {Pagination} from '../Components/Pagination';
import {FilterButton} from '../Components/FilterButton';
import {Navbar} from '../../../components/Navbar';
import {SearchBar} from '../../../components/searchbar';
import {CardHeroContainer} from '../../../containers/CardHero';
import {hero} from '../../../redux/hero/types';

interface MainScreenContainerProps {
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
        <div>
          <ul className="container">
            {heroes.map((hero, index) => {
              return (
                <CardHeroContainer
                  key={index}
                  index={index}
                  hero={hero}
                  favorties={favorites}
                />
              );
            })}
          </ul>

          <Pagination
            page={page}
            isLoading={isLoading}
            handleNextPage={handleNextPage}
            handlePrevPage={handlePrevPage}
          />
        </div>
      )}
    </div>
  );
};
