export interface Item {
  name: string;
  icon: string;
}

export interface Member {
  slug: string;
  name: string;
  types: string[];
  ability: string;
  speed?: string;
  item: Item;
  moves: string[];
  nature?: string;
  roles?: string[];
  counter?: string;
  note?: string;
}

export interface Team {
  number: number;
  warnings: string[];
  members: Member[];
}

export interface LeaderTeams {
  leads: Record<string, number[]>;
  teams: Team[];
}
