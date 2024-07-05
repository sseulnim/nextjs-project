import React from "react";
import { fetchData } from "@/apis/pokemon";
import Image from "next/image";
import Link from "next/link";

const PokemonDetailPage = async ({ params }: { params: { id: string } }) => {
  const pokemonData = await fetchData(params.id);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
      <div className="pokemon-details max-w-xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <header className="bg-teal-500 text-white text-center py-4">
          <h1 className="text-2xl font-bold">{pokemonData.korean_name}</h1>
        </header>
        <div className="bg-gray-100 text-gray-800 text-center p-6">
          <Image
            src={pokemonData.sprites.front_default}
            alt={pokemonData.korean_name}
            className="mx-auto"
            width={150}
            height={150}
          />
          <p className="text-center text-2xl my-4">{pokemonData.korean_name}</p>
          <div className="flex justify-center gap-6 my-4">
            <p className="text-lg">키: {pokemonData.height / 10} m</p>
            <p className="text-lg">무게: {pokemonData.weight / 10} kg</p>
          </div>
          <div className="text-center my-6">
            <p className="font-bold text-xl mb-4">기술:</p>
            <div className="flex flex-wrap gap-1 justify-center">
              {pokemonData.moves.map((move) => (
                <div
                  key={move.move.name}
                  className="bg-blue-200 text-blue-800 px-1 py-0.5 text-sm rounded"
                >
                  {move.move.korean_name}
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-6">
            <Link
              href="/"
              className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition-colors"
            >
              뒤로 가기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetailPage;
