import { typeColor } from "../../utils/types";

export const TypeBadge = ({ type }: { type: string }) => (
  <span className="type-badge" style={{ backgroundColor: typeColor(type) }}>
    {type}
  </span>
);
