import React from 'react';

import {FilterButton} from '../../../components/FilterButton';
import {Navbar} from '../../../components/Navbar';
import {SearchBar} from '../../../components/searchbar';
import {Hero} from '../../../redux/hero/types';
import {RenderHero} from '../Components/RenderHeros';
import {HeroPlaceholder} from 'src/components/HeroPlaceHolder';
import {PlaceholderModal} from 'src/containers/PlaceHolderModal';
import './style.css';
export interface MainScreenContainerProps {
  heroes: Hero[];
  isLoading: boolean;
  categories: string[];
  favorites: Hero[];
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

      {isLoading ? (
        <>
          <div className="container_placeholder">
            <PlaceholderModal outputCount={10}>
              <HeroPlaceholder />
            </PlaceholderModal>
          </div>
        </>
      ) : (
        <>
          <FilterButton
            categories={categories}
            handleFilterItems={handleFilterItems}
          />
          <RenderHero
            page={page}
            heroes={heroes}
            favorites={favorites}
            isLoading={isLoading}
            handleNextPage={handleNextPage}
            handlePrevPage={handlePrevPage}
          />
        </>
      )}
    </div>
  );
};
