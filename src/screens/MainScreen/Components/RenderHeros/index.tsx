import React from 'react';
import {CardHeroContainer} from 'src/containers/CardHero';
import {MainScreenContainerProps} from '../../Container';
import { Pagination } from '../Pagination';
import './styles.css'

type HeroProps = Omit<
  MainScreenContainerProps,
  'handleFilterItems' | 'categories'
>;

export const RenderHero: React.FC<HeroProps> = ({
  page,
  heroes,
  favorites,
  isLoading,
  handleNextPage,
  handlePrevPage,
}) => {
  return (
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
  );
};
