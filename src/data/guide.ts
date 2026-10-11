import config from "./config-region.json";
import type { Pokemon } from "../interfaces/Pokemon";
import type { Region } from "../interfaces/Region";

const files = import.meta.glob<{ default: Pokemon }>(["./*/*/*.json", "!./teams/**"], { eager: true });

const pokemonsOf = (regionId: string, leaderId: string): Pokemon[] =>
  Object.entries(files)
    .filter(([path]) => path.startsWith(`./${regionId}/${leaderId}/`))
    .map(([path, module]) => {
      const data = module.default;
      const file = path.split("/").pop()!.replace(".json", "");
      return { ...data, id: data.id || data.name?.toLowerCase() || file };
    });

export const regions: Region[] = config.regions.map((region) => ({
  ...region,
  leaders: region.leaders.map((leader) => ({ ...leader, pokemons: pokemonsOf(region.id, leader.id) })),
}));
