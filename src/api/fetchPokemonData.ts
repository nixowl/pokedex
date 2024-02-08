import { SearchCriteria } from "@/types";
import axios from "axios";

const fetchPokemonData = async ({ name, type }: SearchCriteria) => {
  try {
    const params = {} as SearchCriteria;
    if (name) params.name = name;
    if (type) params.type = type;
    const response = await axios.get(
      `https://pokedex-api-6b36bb0576f1.herokuapp.com/pokedex`,
      { params }
    );
    console.log(response);
    return response;
  } catch (error) {
    console.error("Error fetching pokémon: ", error);
  }
};

export default fetchPokemonData;
