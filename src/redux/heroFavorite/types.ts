import {
  addHeroToFavorite,
  removeHeroFromFavorite,
  favoriteIsLoading,
} from './actions';

export interface FavoritesReducer {
  favorites: {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    films: [];
    species: [];
    vehicles: [];
    starships: [];
    created: string;
    edited: string;
    url: string;
  }[];
  favoriteIsLoading: boolean;
}

export type FavoritesAction =
  | ReturnType<typeof addHeroToFavorite>
  | ReturnType<typeof favoriteIsLoading>
  | ReturnType<typeof removeHeroFromFavorite>;
