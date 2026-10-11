import { useEffect, useState } from "react";
import type { LeaderTeams } from "../interfaces/Team";

const loaders = import.meta.glob<{ default: LeaderTeams }>("../data/teams/*/*.json");
const cache = new Map<string, LeaderTeams>();

export const useTeams = (regionId: string, leaderId: string) => {
  const path = `../data/teams/${regionId}/${leaderId}.json`;
  const [data, setData] = useState<LeaderTeams | null>(cache.get(path) ?? null);

  useEffect(() => {
    if (cache.has(path)) {
      setData(cache.get(path)!);
      return;
    }
    let active = true;
    setData(null);
    loaders[path]?.().then((module) => {
      cache.set(path, module.default);
      if (active) setData(module.default);
    });
    return () => {
      active = false;
    };
  }, [path]);

  return data;
};
