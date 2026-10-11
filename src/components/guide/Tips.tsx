import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const EQUIPMENT_URL = "https://pdftourl.net/images/1791652235937-c711d66c-ff37-457c-973d-873711323734.webp";

const TIPS = [
  "Aqui Farmeo en Stream 👉 https://www.twitch.tv/parzivalmmo",
  "Completa cada Liga 5 veces antes.",
  "Recuerda Que Otra Vez Sirve Para Bostearte 2 Veces Cuando se acaba usalo otra vez,si te hace falta bostearte mas.",
  "Desactivar EXP Share/Reamplificador.",
  "Compra 20 Ataque x , Velocidad x ,Especial x , Precisión x Y 5 Defensa X y Defensa Especial X    .",
  "Recuerda que el primer numero es maquinacion o especial x.",
  "Y el segundo numero es Velocidad",
  'Utilizar "Otra Vez" con Gengar salvo indicación.',
  "Reportar errores en Discord.",
];

export const Tips = () => {
  const [isOpen, setIsOpen] = useState(false);
  const Chevron = isOpen ? ChevronUp : ChevronDown;

  return (
    <div className="flex flex-col items-center mb-2">
      <button onClick={() => setIsOpen(!isOpen)} className="flex gap-2 transition-colors">
        <Chevron className="w-4 h-4" />
        <span className="font-medium pb-2">
          RECOMENDACIONES ANTES DE EMPEZAR <b>(EQUIPO - TIPS)</b>
        </span>
      </button>

      {isOpen && (
        <ul className="list-disc text-left max-w-2xl mx-auto pl-6">
          <li>
            EQUIPO NECESARIO:{" "}
            <a href={EQUIPMENT_URL} target="_blank" rel="noreferrer">
              👉 Hacer Click Aqui 👈
            </a>
          </li>
          {TIPS.map((tip) => (
            <li key={tip}>{tip}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
