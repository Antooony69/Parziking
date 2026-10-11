import { Fragment } from "react";
import { localImage } from "../../utils/sprites";

const ROUTE = [
  { name: "Teselia" },
  { name: "Sinnoh", heal: true },
  { name: "Hoenn", heal: true },
  { name: "Johto" },
  { name: "Kanto", heal: true },
];

export const GuideHeader = () => (
  <div className="text-center mb-8">
    <h1 className="text-4xl font-bold mb-4">FARM LIGA PokeMMO</h1>

    <p className="mb-4">
      RUTA RECOMENDADA:
      <span className="pl-2 flex flex-wrap items-center gap-2 justify-center">
        {ROUTE.map((stop, index) => (
          <Fragment key={stop.name}>
            {index > 0 && "→"}
            <span className="inline-flex items-center gap-1">
              {stop.heal ? `${stop.name} (casa)` : stop.name}
              {stop.heal && <img className="w-4 h-4" src={localImage("Healicon.png")} alt="Casa" />}
            </span>
          </Fragment>
        ))}
      </span>
    </p>
  </div>
);
