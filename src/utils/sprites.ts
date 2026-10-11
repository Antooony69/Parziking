const POKEMONDB = "https://img.pokemondb.net/sprites/black-white/normal";
const ITEMS = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items";
const LOCAL = `${import.meta.env.BASE_URL}images`;

const FORMS: Record<string, string> = {
  "rotom agua": "rotom-wash",
  "rotom fuego": "rotom-heat",
  "rotom hielo": "rotom-frost",
  "rotom ventilador": "rotom-fan",
};

const fileName = (name: string) => name.toLowerCase().replace(/ /g, "_");

export const pokemonSlug = (name: string) =>
  FORMS[name.toLowerCase()] ?? name.toLowerCase().replace(/[.']/g, "").replace(/\s+/g, "-");

export const pokemonSprites = (name: string, slug = pokemonSlug(name)) => [
  `${POKEMONDB}/${slug}.png`,
  `${LOCAL}/pokemon/${fileName(name)}.png`,
];

export const leaderImage = (name: string) => `${LOCAL}/lideres/${fileName(name)}.png`;

export const itemSprite = (icon: string) => `${ITEMS}/${icon}.png`;

export const localImage = (file: string) => `${LOCAL}/${file}`;
