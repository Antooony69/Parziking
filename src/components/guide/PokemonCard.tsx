import type { Pokemon } from "../../interfaces/Pokemon";
import { pokemonSprites } from "../../utils/sprites";
import { Sprite } from "../common/Sprite";

interface PokemonCardProps {
  pokemon: Pokemon;
  isSelected: boolean;
  onClick: (pokemon: Pokemon) => void;
}

export const PokemonCard = ({ pokemon, isSelected, onClick }: PokemonCardProps) => (
  <div
    className={`relative cursor-pointer rounded-lg overflow-hidden transition-all duration-300 bg-[#1e293b] border border-green-900/50 min-w-0 w-full aspect-square ${
      isSelected ? "ring-2 ring-green-400 transform scale-105 shadow-lg z-10" : "hover:bg-[#2d3a4f]"
    }`}
    onClick={() => onClick(pokemon)}
  >
    <div className="absolute inset-0 pointer-events-none">
      <Sprite
        sources={pokemonSprites(pokemon.name)}
        alt={pokemon.name}
        className="w-full h-full object-contain"
        style={{ imageRendering: "pixelated", transform: "scale(1.45) translateY(-4%)" }}
      />
    </div>

    <div className="absolute inset-x-0 bottom-0 z-20 bg-black/70">
      <span className="text-xs sm:text-sm font-bold py-1 w-full text-center block uppercase tracking-tight leading-tight">
        {pokemon.name}
      </span>
    </div>
  </div>
);