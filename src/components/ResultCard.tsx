import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

type ResultCardProps = {
  onClick: () => void;
};

function ResultCard({ onClick }: ResultCardProps) {
  return (
    <Card
      className="flex flex-col place-items-center p-3 w-[80%] cursor-pointer shadow-md min-w-56 max-w-[32%]"
      onClick={onClick}
    >
      <img
        src="src\assets\585966114f6ae202fedf2876.png"
        className="aspect-square max-w-44"
      />
      <p>
        N<sup>o</sup> 123
      </p>
      <h2>Name</h2>
      <p>Click card to see more info</p>
      <div className="flex flex-row gap-2 p-2">
        <Badge variant="bug">Bug</Badge>
        <Badge variant="fairy">Fairy</Badge>
        <Badge variant="fighting">Fighting</Badge>
      </div>
    </Card>
  );
}

export default ResultCard;
