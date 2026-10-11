import { useState } from "react";
import { useTeams } from "../../hooks/useTeams";
import { TeamTable } from "./TeamTable";

interface TeamPanelProps {
  regionId: string;
  leaderId: string;
  pokemonId: string;
}

export const TeamPanel = ({ regionId, leaderId, pokemonId }: TeamPanelProps) => {
  const data = useTeams(regionId, leaderId);
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);

  if (!data?.teams.length) return null;

  const numbers = data.leads[pokemonId] ?? data.teams.map((team) => team.number);
  const current = data.teams.find((team) => team.number === (selected ?? numbers[0]));

  return (
    <div className="mt-6 pt-4 border-t border-gray-700">
      <button onClick={() => setIsOpen(!isOpen)} className={`teams-toggle ${isOpen ? "is-active" : ""}`}>
        {isOpen ? "Ocultar equipos" : "Ver todos los equipos"} ({numbers.length})
      </button>

      {isOpen && current && (
        <div className="mt-4 space-y-3 animate-in slide-in-from-top">
          <div className="flex flex-wrap gap-2">
            {numbers.map((number) => (
              <button
                key={number}
                onClick={() => setSelected(number)}
                className={`team-tab ${number === current.number ? "is-active" : ""}`}
              >
                Equipo {number}
              </button>
            ))}
          </div>

          {current.warnings.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {current.warnings.map((warning) => (
                <span key={warning} className="team-warning">
                  ⚠ {warning}
                </span>
              ))}
            </div>
          )}

          <TeamTable members={current.members} />
        </div>
      )}
    </div>
  );
};
