import React from 'react';
import {FilterButton} from 'src/components/FilterButton';
import {Navbar} from 'src/components/Navbar';
import {CardHeroContainer} from 'src/containers/CardHero';
import {Hero} from 'src/redux/hero/types';

import './favorite.css';

interface FavoriteScreenContainerProps {
  favorites: Hero[];
  categories: string[];
  handleFilterItems: (type: string) => void;
}
export const FavoriteScreenContainer: React.FC<FavoriteScreenContainerProps> =
  ({favorites, categories, handleFilterItems}) => {
    return (
      <div className="containerFavorite">
        <Navbar />
        {Boolean(favorites.length) && (
          <FilterButton
            categories={categories}
            handleFilterItems={handleFilterItems}
          />
        )}

        <div>
          <ul className="containerCard">
            {!favorites?.length ? (
              <p className="no-favorite">
                you don&#x27;t have favorites yet &#44; please add some.
              </p>
            ) : (
              favorites?.map((favorite: Hero, index: number) => {
                return (
                  <CardHeroContainer
                    index={index}
                    key={index}
                    hero={favorite}
                    favorties={favorites}
                  />
                );
              })
            )}
          </ul>
        </div>
      </div>
    );
  };
