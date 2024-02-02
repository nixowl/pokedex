import { Card } from "./ui/card"

function ResultCard() {
  return (
    <Card className="flex flex-col place-items-center p-3 w-[80%]">
      <img
        src="src\assets\585966114f6ae202fedf2876.png"
        className="aspect-square max-w-[40%]"
      />
      <p>
        N<sup>o</sup> 123
      </p>
      <h2>Name</h2>
    </Card>
  );
}

export default ResultCard