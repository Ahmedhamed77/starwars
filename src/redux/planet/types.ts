import {fetchPlanet} from './actions';

export interface PlanetReducer {
  planet: Planet[];
}

export interface Planet {
  climate: string;
  created: string;
  diameter: string;
  edited: string;
  films: string[];
  gravity: string;
  name: string;
  orbital_period: string;
  population: string;
  residents: string[];
  rotation_period: string;
  surface_water: string;
  terrain: string;
  url: string;
}
export type PlanetAction = ReturnType<typeof fetchPlanet>;
