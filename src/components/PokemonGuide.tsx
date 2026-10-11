import { useEffect, useRef, useState } from "react";
import { regions } from "../data/guide";
import type { Pokemon } from "../interfaces/Pokemon";
import { Credits } from "./guide/Credits";
import { GuideHeader } from "./guide/GuideHeader";
import { LeaderCard } from "./guide/LeaderCard";
import { PokemonCard } from "./guide/PokemonCard";
import { PokemonDetails } from "./guide/PokemonDetails";
import { RegionCard } from "./guide/RegionCard";
import { Tips } from "./guide/Tips";

const regionOrder = ["teselia", "sinnoh", "hoenn", "johto", "kanto"];

export default function PokemonGuide() {
  const [regionId, setRegionId] = useState<string | null>(null);
  const [leaderId, setLeaderId] = useState<string | null>(null);
  const [selected, setSelected] = useState<Pokemon | null>(null);
  const [lightMode, setLightMode] = useState(false);
  const [fontScale, setFontScale] = useState(100);
  const detailsRef = useRef<HTMLDivElement>(null);
  const regionsRef = useRef<HTMLDivElement>(null);
  const leadersRef = useRef<HTMLDivElement>(null);

  // Tamaño de letra global (60% a 150%)
  useEffect(() => {
    document.documentElement.style.fontSize = `${fontScale}%`;
  }, [fontScale]);

  const increaseFont = () => setFontScale((s) => Math.min(s + 10, 150));
  const decreaseFont = () => setFontScale((s) => Math.max(s - 10, 60));
  const resetFont = () => setFontScale(100);

  const orderedRegions = regionOrder
    .map((id) => regions.find((r) => r.id === id))
    .filter((r): r is (typeof regions)[number] => Boolean(r));

  const region = regions.find((r) => r.id === regionId);
  const leader = region?.leaders.find((l) => l.id === leaderId);

  const selectRegion = (id: string) => {
    setRegionId(regionId === id ? null : id);
    setLeaderId(null);
    setSelected(null);
  };

  const selectLeader = (id: string) => {
    setLeaderId(leaderId === id ? null : id);
    setSelected(null);
  };

  const selectPokemon = (pokemon: Pokemon) => {
    const isSame = selected?.id === pokemon.id;
    setSelected(isSame ? null : pokemon);
    if (!isSame) {
      setTimeout(() => detailsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
    }
  };

  // ---- Botones de navegación ----
  const scrollToLeaders = () => {
    setTimeout(() => leadersRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
  };

  const goToRegions = () => {
    regionsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const goToLeaders = () => {
    if (!region) {
      goToRegions();
      return;
    }
    leadersRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const nextLeader = () => {
    if (!region) {
      const first = orderedRegions[0];
      if (!first) return;
      setRegionId(first.id);
      setLeaderId(first.leaders[0]?.id ?? null);
      setSelected(null);
      scrollToLeaders();
      return;
    }

    const leaders = region.leaders;
    const currentIndex = leaders.findIndex((l) => l.id === leaderId);

    if (currentIndex < leaders.length - 1) {
      setLeaderId(leaders[currentIndex + 1].id);
      setSelected(null);
      scrollToLeaders();
      return;
    }

    const regionIndex = orderedRegions.findIndex((r) => r.id === region.id);
    const nextRegion = orderedRegions[regionIndex + 1];
    if (nextRegion) {
      setRegionId(nextRegion.id);
      setLeaderId(nextRegion.leaders[0]?.id ?? null);
      setSelected(null);
      scrollToLeaders();
    }
  };

  const lastRegion = orderedRegions[orderedRegions.length - 1];
  const isFinished =
    !!region &&
    !!leader &&
    region.id === lastRegion?.id &&
    leader.id === region.leaders[region.leaders.length - 1]?.id;

  return (
    <div className={`relative z-[1] min-h-screen transition-colors duration-300 ${lightMode ? "bg-gray-100" : ""}`}>
      <div className="container mx-auto px-4 py-8">
        <GuideHeader />
        <Tips />

        <div ref={regionsRef} className="grid grid-cols-5 gap-3 mb-6 scroll-mt-4">
          {orderedRegions.map((r) => (
            <RegionCard key={r.id} region={r} isExpanded={regionId === r.id} onClick={selectRegion} />
          ))}
        </div>

        {region && (
          <div ref={leadersRef} className="grid grid-cols-5 gap-3 mb-6 scroll-mt-4">
            {region.leaders.map((l) => (
              <LeaderCard key={l.id} leader={l} isExpanded={leaderId === l.id} onClick={selectLeader} />
            ))}
          </div>
        )}

        {leader && (
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 mb-6">
            {leader.pokemons?.map((pokemon) => (
              <PokemonCard
                key={pokemon.id}
                pokemon={pokemon}
                isSelected={selected?.id === pokemon.id}
                onClick={selectPokemon}
              />
            ))}
          </div>
        )}

        {region && leader && selected && (
          <div ref={detailsRef} className="scroll-mt-10">
            <PokemonDetails pokemon={selected} regionId={region.id} leaderId={leader.id} />
          </div>
        )}

        <Credits
          lightMode={lightMode}
          onToggleMode={() => setLightMode(!lightMode)}
          onSelectRegion={goToRegions}
          onSelectLeader={goToLeaders}
          onNextLeader={nextLeader}
          isFinished={isFinished}
          fontScale={fontScale}
          onIncreaseFont={increaseFont}
          onDecreaseFont={decreaseFont}
          onResetFont={resetFont}
        />
      </div>
    </div>
  );
}