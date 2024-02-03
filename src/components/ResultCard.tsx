import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Pokemon } from "@/types";

type ResultCardProps = {
  pokemon: Pokemon;
  onClick: () => void;
};

const BadgeVariants = {
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

function ResultCard({ pokemon, onClick }: ResultCardProps) {
  return (
    <Card
      className="flex flex-col place-items-center p-3 w-[80%] cursor-pointer shadow-md min-w-56 max-w-[32%]"
      onClick={onClick}
    >
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="aspect-square max-w-44"
      />
      <p>
        N<sup>o</sup> {pokemon.id}
      </p>
      <h2 className="font-bold">
        {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
      </h2>
      <p>Click card to see more info</p>
      <div className="flex flex-row gap-2 p-2">
        {pokemon.types.map((type) => (
          <Badge variant={type.type.name as keyof typeof BadgeVariants}>
            {type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}
          </Badge>
        ))}
      </div>
    </Card>
  );
}

export default ResultCard;
