import {Hero} from '../hero/types';

import {
  addHeroToFavorite,
  removeHeroFromFavorite,
  favoriteIsLoading,
  filterFavorites,
} from './actions';

export interface FavoritesReducer {
  favorites: Hero[];
  favoriteIsLoading: boolean;
  favoritesCopy: Hero[];
}

export type FavoritesAction =
  | ReturnType<typeof addHeroToFavorite>
  | ReturnType<typeof favoriteIsLoading>
  | ReturnType<typeof removeHeroFromFavorite>
  | ReturnType<typeof filterFavorites>;
