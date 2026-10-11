import { localImage } from "../../utils/sprites";

const AUTHORS = [
  { name: "Parzival", url: "https://imgur.com/Hxui6yL", image: "zParzival.png" },
];

interface CreditsProps {
  lightMode: boolean;
  onToggleMode: () => void;
  onSelectRegion: () => void;
  onSelectLeader: () => void;
  onNextLeader: () => void;
  isFinished: boolean;
  fontScale: number;
  onIncreaseFont: () => void;
  onDecreaseFont: () => void;
  onResetFont: () => void;
}

export const Credits = ({
  lightMode,
  onToggleMode,
  onSelectRegion,
  onSelectLeader,
  onNextLeader,
  isFinished,
  fontScale,
  onIncreaseFont,
  onDecreaseFont,
  onResetFont,
}: CreditsProps) => (
  <div className="flex flex-wrap justify-between items-center gap-4 mt-8 pt-4 border-t border-gray-700">
    <div className="flex items-center gap-3">
      <span>Creditos</span>
      
      <div className="flex items-center gap-2">
        {AUTHORS.map((author) => (
          <a key={author.name} href={author.url} target="_blank" rel="noreferrer">
            <img className="w-10 h-10 hover:scale-110 transition-transform" src={localImage(author.image)} alt={author.name} />
          </a>
        ))}
      </div>
    </div>

    {/* pr-16 deja libre la esquina donde está el botón de subir */}
    <div className="flex flex-wrap items-center gap-3 pr-16">
      {/* Botones de navegación */}
      <button
        onClick={onSelectRegion}
        className="bg-blue-600 hover:bg-blue-700 text-white font-normal px-4 py-2 rounded-xl shadow-md transition"
      >
        seleccionar región
      </button>

      <button
        onClick={onSelectLeader}
        className="bg-yellow-500 hover:bg-yellow-600 text-black font-normal px-4 py-2 rounded-xl shadow-md transition"
      >
        seleccionar campeón
      </button>

      <button
        onClick={onNextLeader}
        disabled={isFinished}
        className="bg-green-700 hover:bg-green-800 disabled:opacity-50 disabled:cursor-not-allowed text-white font-normal px-4 py-2 rounded-xl shadow-md transition"
      >
        {isFinished ? "¡guía terminada!" : "siguiente campeón"}
      </button>

      {/* Tamaño de letra */}
      <div className="flex items-center gap-1">
        <button
          onClick={onDecreaseFont}
          className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-2 rounded-lg transition"
          title="Letras más pequeñas"
        >
          A−
        </button>
        <button onClick={onResetFont} className="px-2 text-sm" title="Tamaño normal">
          {fontScale}%
        </button>
        <button
          onClick={onIncreaseFont}
          className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-2 rounded-lg transition"
          title="Letras más grandes"
        >
          A+
        </button>
      </div>

      <button onClick={onToggleMode}>{lightMode ? "Dark Mode" : "Light Mode"}</button>
    </div>
  </div>
);