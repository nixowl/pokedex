export type Types = {
  type_a: string;
  type_b: string;
};

export type Pokemon = {
  id: number;
  name: string;
  type_a: string;
  type_b: string;
}

export type PokemonList = {
  pokemon: Pokemon[];
}

export type SearchCriteria = {
  name?: string;
  type?: string;
};

export type Props = {
  children: React.ReactNode;
};

export const BadgeVariants = {
  default: "",
  destructive: "",
  outline: "",
  secondary: "",
  ghost: "",
  normal: "",
  fire: "",
  water: "",
  flying: "",
  fighting: "",
  poison: "",
  electric: "",
  ground: "",
  rock: "",
  psychic: "",
  ice: "",
} as const;
