import { useEffect, useState, useCallback } from "react";
import "../globals.css";
import SearchField from "./SearchField";
import Sidebar from "./Sidebar";
import axios from "axios";
import ResultCard from "./ResultCard";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Pokemon, PokemonListItem } from "@/types";

function App() {
  // const [results, setResults] = useState<Pokemon | undefined>(undefined);
  const [pokemonDetails, setPokemonDetails] = useState<Pokemon[]>([]);
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [offset, setOffset] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  // const [page, setPage] = useState(1);

  const fetchPokemonList = useCallback(async () => {
    console.log("fetching pokémon");
    try {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/?limit=12&offset=${offset}`
      );
      console.log("data: ", data.results);
      return data.results;
    } catch (error) {
      console.error("Error fetching pokémon: ", error);
    }
  }, [offset]);

  const fetchPokemonDetails = async (
    pokemonList: PokemonListItem[]
  ): Promise<Pokemon[]> => {
    try {
      const detailsPromises = pokemonList.map((pokemon) =>
        axios.get<Pokemon>(pokemon.url).then((response) => response.data)
      );
      const details = await Promise.all(detailsPromises);
      console.log("details: ", details)
      return details;
    } catch (error) {
      console.error("Error fetching Pokémon details:", error);
      return [];
    }
  };

 useEffect(() => {
   const fetchAndDisplayPokemon = async () => {
     const pokemonListItems = await fetchPokemonList();
     if (pokemonListItems) {
       const details = await fetchPokemonDetails(pokemonListItems);
       setPokemonDetails(details);
     }
   };

   fetchAndDisplayPokemon().catch(console.error);
 }, [fetchPokemonList]); 

  
  const handlePageChange = (newPage: number) => {
    const newOffset = (newPage - 1) * 12;
    setCurrentPage(newPage);
    setOffset(newOffset);
  };

   const nextPage = () => handlePageChange(currentPage + 1);
   const prevPage = () => handlePageChange(currentPage - 1);
  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  return (
    <>
      <header className="bg-card p-3 rounded-md mb-3">hello im a header</header>
      <main className="flex flex-row flex-1 gap-4 justify-between place-items-center">
        <section className="flex flex-col gap-4 h-full w-2/3">
          <SearchField setQuery={setQuery} query={query} />
          <div className="flex flex-col md:flex-wrap md:flex-row gap-3 justify-center items-center h-full">
            {pokemonDetails.map((pokemon) => (
              <ResultCard
                key={pokemon.id}
                pokemon={pokemon}
                onClick={toggleDrawer}
              />
            ))}
          </div>
          <div>
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    onClick={prevPage}
                  >
                    Previous
                  </PaginationPrevious>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink onClick={() => handlePageChange(1)}>
                    {currentPage}
                  </PaginationLink>
                </PaginationItem>

                <PaginationItem>
                  <PaginationNext onClick={nextPage}>Next</PaginationNext>
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </section>
        <section className="flex flex-col min-w-1/3">
          {isDrawerOpen && <Sidebar />}
        </section>
      </main>
      <footer className="bg-card p-4 rounded-md m-2">im a footer. bye</footer>
      {/* Screen size indicators */}
      <div className="fixed bottom-1 left-1 z-50 flex size-6 items-center justify-center rounded-full bg-gray-800 p-3 font-mono text-xs text-white">
        <div className="block sm:hidden">xs</div>
        <div className="hidden sm:block md:hidden lg:hidden xl:hidden 2xl:hidden">
          sm
        </div>
        <div className="hidden md:block lg:hidden xl:hidden 2xl:hidden">md</div>
        <div className="hidden lg:block xl:hidden 2xl:hidden">lg</div>
        <div className="hidden xl:block 2xl:hidden">xl</div>
        <div className="hidden 2xl:block">2xl</div>
      </div>
    </>
  );
}

export default App;
