// Shadcn component imports
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "./ui/button";
import SearchIcon from "./ui/icons/SearchIcon";
import { Dispatch, SetStateAction } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type SearchFieldProps = {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
}

function SearchField({ query, setQuery }: SearchFieldProps) {

  return (
    <div className="flex flex-col p-4 gap-3">
      <div className="flex flex-row gap-1">
        <Input
          type="text"
          placeholder="Search Pokémon"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button>
          <SearchIcon />
        </Button>
      </div>
      <div className="flex flex-row flex-wrap gap-2 place-content-around">
        <Accordion type="single" className="w-full" collapsible>
          <AccordionItem value="filters">
            <AccordionTrigger>Filters</AccordionTrigger>
            <AccordionContent className="flex flex-row flex-wrap gap-2 place-content-around">
                          <Select>
                  <SelectTrigger className="w-[45%]">
                    <SelectValue placeholder="Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="normal">Normal</SelectItem>
                    <SelectItem value="fire">Fire</SelectItem>
                    <SelectItem value="water">Water</SelectItem>
                    <SelectItem value="flying">Flying</SelectItem>
                    <SelectItem value="fighting">Fighting</SelectItem>
                    <SelectItem value="poison">Poison</SelectItem>
                    <SelectItem value="electric">Electric</SelectItem>
                    <SelectItem value="ground">Ground</SelectItem>
                    <SelectItem value="rock">Rock</SelectItem>
                    <SelectItem value="psychic">Psychic</SelectItem>
                    <SelectItem value="ice">Ice</SelectItem>
                    <SelectItem value="bug">Bug</SelectItem>
                    <SelectItem value="ghost">Ghost</SelectItem>
                    <SelectItem value="steel">Steel</SelectItem>
                    <SelectItem value="dragon">Dragon</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="fairy">Fairy</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-[45%]">
                    <SelectValue placeholder="Weakness" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="normal">Normal</SelectItem>
                    <SelectItem value="fire">Fire</SelectItem>
                    <SelectItem value="water">Water</SelectItem>
                    <SelectItem value="flying">Flying</SelectItem>
                    <SelectItem value="fighting">Fighting</SelectItem>
                    <SelectItem value="poison">Poison</SelectItem>
                    <SelectItem value="electric">Electric</SelectItem>
                    <SelectItem value="ground">Ground</SelectItem>
                    <SelectItem value="rock">Rock</SelectItem>
                    <SelectItem value="psychic">Psychic</SelectItem>
                    <SelectItem value="ice">Ice</SelectItem>
                    <SelectItem value="bug">Bug</SelectItem>
                    <SelectItem value="ghost">Ghost</SelectItem>
                    <SelectItem value="steel">Steel</SelectItem>
                    <SelectItem value="dragon">Dragon</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="fairy">Fairy</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-[45%]">
                    <SelectValue placeholder="Ability" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-[45%]">
                    <SelectValue placeholder="Height" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-[45%]">
                    <SelectValue placeholder="Weight" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
             
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

export default SearchField;
