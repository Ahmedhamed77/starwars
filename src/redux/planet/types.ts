import {fetchPlanet} from './actions';

export interface PlanetReducer {
  planet: {
    name: string;
    rotation_period: string;
    orbital_period: string;
    diameter: string;
    climate: string;
    gravity: string;
    terrain: string;
    surface_water: string;
    population: string;
  }[];
}
export type PlanetAction = ReturnType<typeof fetchPlanet>;
