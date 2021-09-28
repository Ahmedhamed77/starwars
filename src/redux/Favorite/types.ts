import {hero} from '../hero/types';

import {
  addHeroToFavorite,
  removeHeroFromFavorite,
  favoriteIsLoading,
} from './actions';

export interface FavoritesReducer {
  favorites: hero[];
  favoriteIsLoading: boolean;
}

export type FavoritesAction =
  | ReturnType<typeof addHeroToFavorite>
  | ReturnType<typeof favoriteIsLoading>
  | ReturnType<typeof removeHeroFromFavorite>;
