import { useState } from "react";
import "../globals.css";
import SearchField from "./SearchField";
import Sidebar from "./Sidebar";
import axios from "axios";
import { Pokemon } from "@/types";
import ResultCard from "./ResultCard";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

function App() {
  const [results, setResults] = useState<Pokemon | undefined>(undefined);
  const [query, setQuery] = useState("");

  const searchHandler = async () => {
    console.log("fetching pokemon...");
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${query}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response) {
        console.log("response: ", response.data);
        setResults(response.data);
      }
    } catch (error) {
      console.error("Error fetching pokemon: ", error);
    }
  };

  return (
    <>
      <header className="bg-stone-300 p-4 rounded-md m-2">
        hello im a header
      </header>
      <main className="flex flex-col flex-1 gap-4 justify-between place-items-center">
        <section className="flex flex-col md:basis-4/6 h-full">
          <SearchField
            setQuery={setQuery}
            query={query}
            searchHandler={searchHandler}
          />
          <div className="flex flex-row flex-wrap gap-3 justify-center items-center h-full">
            <ResultCard />
            <ResultCard />
            <ResultCard />
            <ResultCard />
            <ResultCard />
          </div>
        </section>
        <section className="flex flex-col md:basis-2/6">
          <Sidebar />
        </section>
        <section>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </section>
      </main>
      <footer className="bg-stone-300 p-4 rounded-md m-2">
        im a footer. bye
      </footer>
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
