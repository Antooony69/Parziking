import type { ReactNode } from "react";
import type { Member } from "../../interfaces/Team";
import { itemSprite, pokemonSprites } from "../../utils/sprites";
import { Sprite } from "../common/Sprite";
import { TypeBadge } from "./TypeBadge";

interface Row {
  label: string;
  tone?: string;
  value: (member: Member) => ReactNode;
}

const ROWS: Row[] = [
  { label: "Tipo", value: (m) => m.types.map((type) => <TypeBadge key={type} type={type} />) },
  { label: "Habilidad", value: (m) => m.ability },
  { label: "Velocidad", value: (m) => m.speed },
  {
    label: "Objeto",
    value: (m) => (
      <span className="inline-flex items-center gap-1">
        <Sprite sources={[itemSprite(m.item.icon)]} alt="" className="w-6 h-6" style={{ imageRendering: "pixelated" }} />
        {m.item.name}
      </span>
    ),
  },
  ...[0, 1, 2, 3].map((slot) => ({ label: `Ataque ${slot + 1}`, value: (m: Member) => m.moves[slot] })),
  { label: "Naturaleza", value: (m) => m.nature },
  { label: "Rol", tone: "cell-role", value: (m) => m.roles?.join(" · ") },
  { label: "Clave", tone: "cell-counter", value: (m) => m.counter },
  { label: "Nota", tone: "cell-note", value: (m) => m.note },
];

export const TeamTable = ({ members }: { members: Member[] }) => {
  const rows = ROWS.filter((row) => members.some((member) => row.value(member)));

  return (
    <div className="overflow-x-auto rounded-lg border border-gray-700">
      <table className="team-table">
        <thead>
          <tr>
            <th />
            {members.map((member, index) => (
              <th key={index}>
                <Sprite
                  sources={pokemonSprites(member.name, member.slug)}
                  alt={member.name}
                  className="w-16 h-16 mx-auto"
                  style={{ imageRendering: "pixelated" }}
                />
                <span className="block font-bold">{member.name}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label}>
              <th scope="row">{row.label}</th>
              {members.map((member, index) => (
                <td key={index} className={row.tone}>
                  {row.value(member)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
