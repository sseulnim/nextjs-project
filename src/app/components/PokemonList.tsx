"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Pokemon } from "@/types/pokemon";
import axios from "axios";

const PokemonList: React.FC = () => {
  const [pokemons, setPokemons] = React.useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/api/pokemons");
      setPokemons(response.data);
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <header className="bg-teal-500 text-white text-center py-4">
        <h1 className="text-2xl font-bold">포켓몬</h1>
      </header>
      {pokemons.length === 0 ? (
        <div className="flex flex-col justify-center items-center h-screen">
          <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4 animate-spin"></div>
          <p className="text-xl font-semibold">로딩 중...</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 py-6">
          {pokemons.map((pokemon) => (
            <div
              key={pokemon.id}
              className="pokemon p-4 border rounded-lg shadow-lg bg-blue-50 transform transition-transform duration-300 hover:scale-105 hover:shadow-md"
            >
              <Link href={`/pokemons/${pokemon.id}`}>
                <div className="flex flex-col items-center">
                  <Image
                    src={pokemon.sprites.front_default}
                    alt={pokemon.korean_name}
                    width={96}
                    height={96}
                  />
                  <p className="text-lg font-bold mt-2">
                    {pokemon.korean_name}
                  </p>
                  <p className="text-sm text-gray-500">no. {pokemon.id}</p>
                  <p className="text-sm text-blue-700 mt-2">상세 정보</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PokemonList;
