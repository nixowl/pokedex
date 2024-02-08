import { useEffect, useState } from "react";
import ResultCard from "./ResultCard";
import { Pokemon, SearchCriteria } from "@/types";
import fetchPokemonData from "@/api/fetchPokemonData";
import ResultPagination from "./ResultPagination";
import PokeModal from "./PokeModal";
import { useDisclosure } from "@nextui-org/react";

type ContentProps = {
  query: string;
  type: string;
};

function Content({ query }: ContentProps) {
  const [pokemonDetails, setPokemonDetails] = useState<Pokemon[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const fetchPokemon = async () => {
      if (query) {
        const criteria: SearchCriteria = { name: query, type: query };
        const response = await fetchPokemonData(criteria);
        if (response && Array.isArray(response.data)) {
          setPokemonDetails(response.data);
        }
      }
    };
    fetchPokemon();
  }, [query]);
    
     const handleCardClick = (pokemon: Pokemon) => {
       setSelectedPokemon(pokemon);
       onOpen(); // Use setOpen from useDisclosure to open the modal
     };

    return (
      <div className="flex flex-col h-full justify-between">
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 px-6 justify-items-center grid-rows-auto gap-3 h-full flex-1">
        {/* {pokemonDetails.map((pokemon) => (
                  <ResultCard
                    key={pokemon.id}
                    pokemon={pokemon}
                  />
                ))} */}
        <ResultCard onClick={() => handleCardClick({id: 122, name: "blah", type_a: "water", type_b: "fire"})} />
      </div>
      {selectedPokemon && (
        <PokeModal
          isOpen={isOpen}
          onClose={onClose}
        />
      )}

      {/* Pagination needs work */}
      
    </section>
            <ResultPagination />
        </div>
  );
}

export default Content;
