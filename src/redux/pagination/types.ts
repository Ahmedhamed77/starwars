import {handlePaginationHero, paginationLoading} from './actions';

export interface PaginationReducer {
  heroesPagination: {
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
  PaginationIsLoading: boolean;
}

export type PaginationAction =
  | ReturnType<typeof handlePaginationHero>
  | ReturnType<typeof paginationLoading>;
