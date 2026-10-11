import type { Pokemon } from './Pokemon';

export interface ConfigLeader {
  id: string;
  name: string;
  image?: string;
  pokemons?: Pokemon[];
}

export interface Region extends ConfigLeader {
  image?: string;
  leaders: ConfigLeader[];
}
