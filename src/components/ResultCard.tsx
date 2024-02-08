import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Pokemon } from "@/types";

// Made these temporarily optional to keep component functional
type ResultCardProps = {
  pokemon?: Pokemon;
  onClick?: () => void;
};

function ResultCard({ onClick }: ResultCardProps) {
  return (
    // <Card
    //   className="flex flex-col place-items-center p-3 w-[80%] cursor-pointer shadow-md min-w-56 max-w-[32%]"
    //   onClick={onClick}
    // >
    //   <img
    //     src={pokemon.sprites.front_default}
    //     alt={pokemon.name}
    //     className="aspect-square max-w-44"
    //   />
    //   <p>
    //     N<sup>o</sup> {pokemon.id}
    //   </p>
    //   <h2 className="font-bold">
    //     {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
    //   </h2>
    //   <p>Click card to see more info</p>
    //   <div className="flex flex-row gap-2 p-2">
    //     {pokemon.types.map((type) => (
    //       <Badge variant={type.type.name as keyof typeof BadgeVariants}>
    //         {type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}
    //       </Badge>
    //     ))}
    //   </div>
    // </Card>

    // Placeholder for designing
    <>
      <Card
        className="flex flex-col place-items-center p-3 cursor-pointer shadow-md w-full"
        onClick={onClick}
      >
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
          alt="Ditto"
          className="aspect-square max-w-96"
        />
        <p>
          N<sup>o</sup> 132
        </p>
        <h2 className="font-bold">Ditto</h2>
        <p className="text-tiny">Click card to see more info</p>
        <div className="flex flex-row gap-2 p-2">
          <Badge variant="normal">Normal</Badge>
        </div>
      </Card>

      <Card
        className="flex flex-col place-items-center p-3 cursor-pointer shadow-md w-full"
        onClick={onClick}
      >
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png"
          alt="Ponyta"
          className="aspect-square max-w-44"
        />
        <p>
          N<sup>o</sup> 077
        </p>
        <h2 className="font-bold">Ponyta</h2>
        <p className="text-tiny">Click card to see more info</p>
        <div className="flex flex-row gap-2 p-2">
          <Badge variant="fire">Fire</Badge>
        </div>
      </Card>

      <Card
        className="flex flex-col place-items-center p-3 cursor-pointer shadow-md w-full"
        onClick={onClick}
      >
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png"
          alt="Horsea"
          className="aspect-square max-w-44"
        />
        <p>
          N<sup>o</sup> 116
        </p>
        <h2 className="font-bold">Horsea</h2>
        <p className="text-tiny">Click card to see more info</p>
        <div className="flex flex-row gap-2 p-2">
          <Badge variant="water">Water</Badge>
        </div>
      </Card>
      
      <Card
        className="flex flex-col place-items-center p-3 cursor-pointer shadow-md w-full"
        onClick={onClick}
      >
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png"
          alt="Horsea"
          className="aspect-square max-w-44"
        />
        <p>
          N<sup>o</sup> 116
        </p>
        <h2 className="font-bold">Horsea</h2>
        <p className="text-tiny">Click card to see more info</p>
        <div className="flex flex-row gap-2 p-2">
          <Badge variant="water">Water</Badge>
        </div>
      </Card>

      <Card
        className="flex flex-col place-items-center p-3 cursor-pointer shadow-md w-full"
        onClick={onClick}
      >
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png"
          alt="Horsea"
          className="aspect-square max-w-44"
        />
        <p>
          N<sup>o</sup> 116
        </p>
        <h2 className="font-bold">Horsea</h2>
        <p className="text-tiny">Click card to see more info</p>
        <div className="flex flex-row gap-2 p-2">
          <Badge variant="water">Water</Badge>
        </div>
      </Card>
      
      <Card
        className="flex flex-col place-items-center p-3 cursor-pointer shadow-md w-full"
        onClick={onClick}
      >
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png"
          alt="Horsea"
          className="aspect-square max-w-44"
        />
        <p>
          N<sup>o</sup> 116
        </p>
        <h2 className="font-bold">Horsea</h2>
        <p className="text-tiny">Click card to see more info</p>
        <div className="flex flex-row gap-2 p-2">
          <Badge variant="water">Water</Badge>
        </div>
      </Card>
    </>
  );
}

export default ResultCard;
