import { useState } from "react";
import "../globals.css";
import SearchField from "./SearchField";
import Sidebar from "./Sidebar";
import axios from "axios";
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
  // const [results, setResults] = useState<Pokemon | undefined>(undefined);
  const [query, setQuery] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  // const [page, setPage] = useState(1);

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
      }
    } catch (error) {
      console.error("Error fetching pokemon: ", error);
    }
  };

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  return (
    <>
      <header className="bg-card p-4 rounded-md m-2">hello im a header</header>
      <main className="flex flex-row flex-1 gap-4 justify-between place-items-center">
        <section className="flex flex-col gap-4 h-full w-2/3">
          <SearchField
            setQuery={setQuery}
            query={query}
            searchHandler={searchHandler}
          />
          <div className="flex flex-col md:flex-wrap md:flex-row gap-3 justify-center items-center h-full">
            <ResultCard onClick={toggleDrawer} />
          </div>
          <div>
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
