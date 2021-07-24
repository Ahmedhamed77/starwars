import {getHeroesData} from './actions';

export interface HeroReducer {
  heroes: [];
}

export type HeroAction = ReturnType<typeof getHeroesData>;
