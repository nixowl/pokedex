export type Pokemon = {
  name: string;
  types: {
    type: {
      name: string;
    }
  }[];
  id: number;
  sprites: {
    front_default: string;
  };
}

export type PokemonListItem = {
  name: string;
  url: string;
}

export type PokemonList = {
  count: number;
  next: string;
  previous: string;
  results: PokemonListItem[];
}


export type Props = {
  children: React.ReactNode;
};

