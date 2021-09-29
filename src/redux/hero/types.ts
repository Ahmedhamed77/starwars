import {getHeroesData, heroIsLoading, searchHero, filterHeros} from './actions';

export interface HeroReducer {
  heroes: Hero[];
  heroIsLoading: boolean;
  heroCopy: Hero[];
}

export type Hero = {
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
  | ReturnType<typeof searchHero>
  | ReturnType<typeof heroIsLoading>
  | ReturnType<typeof filterHeros>;
