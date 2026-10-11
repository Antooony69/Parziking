export const TYPE_COLORS: Record<string, string> = {
  Normal: "#9099a1",
  Fuego: "#ff7a3d",
  Agua: "#3d8fe0",
  Planta: "#4cae52",
  Eléctrico: "#e6b800",
  Hielo: "#55c4c4",
  Lucha: "#d04164",
  Veneno: "#a85fc9",
  Tierra: "#c9773f",
  Volador: "#7f9fe0",
  Psíquico: "#f0607a",
  Bicho: "#8fb82a",
  Roca: "#b8a56b",
  Fantasma: "#6a6fc4",
  Dragón: "#3a6fd6",
  Siniestro: "#5d5870",
  Acero: "#5a8ea1",
  Hada: "#e88fe0",
};

export const typeColor = (type: string) => TYPE_COLORS[type] ?? "#c9a23a";
