import {hero} from './reducers';
import {
  getHeroesData,
  heroIsLoading,
  removeHeroFromFavorite,
  addHeroToFavorite,
  searchHero,
  handlePaginationHero,
} from './actions';

export interface HeroReducer {
  heroes: {
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
  heroIsLoading: boolean;
}

export type hero = {
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
};
export type HeroAction =
  | ReturnType<typeof getHeroesData>
  | ReturnType<typeof addHeroToFavorite>
  | ReturnType<typeof removeHeroFromFavorite>
  | ReturnType<typeof searchHero>
  | ReturnType<typeof handlePaginationHero>
  | ReturnType<typeof heroIsLoading>;
