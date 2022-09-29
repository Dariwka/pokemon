import { getOptionsForVote } from "@/utils/getRandomPokemon";

export default function Home() {
  const [first, second] = getOptionsForVote();
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center relative">
      <div className="text-2xl text-center">Which pokemon is Rounder?</div>
      <div className="p-2" />
      <div className="border rounded p-8 flex justify-between max-w-2xl">
        <div className="w-16 h-16 bg-red-800">{first}</div>
        <div className="p-8">Vs</div>
        <div className="w-16 h-16 bg-red-800">{second}</div>
      </div>
    </div>
  );
}
