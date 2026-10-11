import type { ConfigLeader } from "../../interfaces/Region";
import { leaderImage } from "../../utils/sprites";

interface LeaderCardProps {
  leader: ConfigLeader;
  isExpanded: boolean;
  onClick: (leaderId: string) => void;
}

export const LeaderCard = ({ leader, isExpanded, onClick }: LeaderCardProps) => (
  <div
    className={`relative cursor-pointer rounded-lg overflow-hidden transition-all duration-300 bg-[#1e293b] border border-gray-700 flex-shrink-0 min-w-0 ${
      isExpanded ? "ring-2 ring-red-400 transform scale-105" : "hover:scale-[1.02]"
    }`}
    onClick={() => onClick(leader.id)}
  >
    <div className="flex items-center justify-center p-1 sm:p-2">
      <img
        src={leaderImage(leader.name)}
        alt={leader.name}
        className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain"
      />
    </div>
    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
      <span className="font-bold text-xs sm:text-sm md:text-lg text-center px-1">{leader.name}</span>
    </div>
  </div>
);
