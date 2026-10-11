import type { Pokemon } from "../../interfaces/Pokemon";
import { TeamPanel } from "../team/TeamPanel";
import { TrickItem } from "./TrickItem";

interface PokemonDetailsProps {
  pokemon: Pokemon;
  regionId: string;
  leaderId: string;
}

export const PokemonDetails = ({ pokemon, regionId, leaderId }: PokemonDetailsProps) => (
  <div className="bg-[#1f2937] rounded-lg p-6 animate-in slide-in-from-bottom duration-300 border border-gray-700">
    <h3 className="text-xl font-bold mb-4">{pokemon.initialMove}:</h3>

    <div className="space-y-3">
      {pokemon.tricks?.length ? (
        pokemon.tricks.map((trick, index) => <TrickItem key={index} trick={trick} />)
      ) : (
        <div className="text-center py-4">No hay estrategias disponibles para {pokemon.name} aún.</div>
      )}
    </div>

    <TeamPanel key={`${leaderId}-${pokemon.id}`} regionId={regionId} leaderId={leaderId} pokemonId={pokemon.id!} />
  </div>
);
