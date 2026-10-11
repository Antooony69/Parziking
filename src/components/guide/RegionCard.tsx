import type { Region } from "../../interfaces/Region";

interface RegionCardProps {
  region: Region;
  isExpanded: boolean;
  onClick: (regionId: string) => void;
}

export const RegionCard = ({ region, isExpanded, onClick }: RegionCardProps) => (
  <div
    className={`relative cursor-pointer rounded-lg overflow-hidden transition-all duration-300 bg-[#1e293b] border border-gray-700 flex-shrink-0 min-w-0 ${
      isExpanded ? "ring-2 ring-blue-400 transform scale-105" : "hover:scale-[1.02]"
    }`}
    onClick={() => onClick(region.id)}
  >
    <div className="w-full h-16 sm:h-20 md:h-24 bg-[#2a3a51]" />
    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
      <span className="font-bold text-xs sm:text-sm md:text-lg text-center px-1">{region.name}</span>
    </div>
  </div>
);
