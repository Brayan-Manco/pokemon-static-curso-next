import { Layout } from "@/components/layouts";
import NoFavorite from "@/components/ui/NoFavorite";
import { localFavorites } from "@/utils";
import { Container, Text, Image, Grid, Card } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { Pokemon } from '../../interfaces/pokemon-full';
import { FavoritePokemons } from "@/components/pokemon";

export const favorites = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons());
  }, []);

  return (
    <Layout title="Pokemons favoritos">
      {favoritePokemons.length === 0 ? (
        <NoFavorite />
      ) : ( <FavoritePokemons pokemons={favoritePokemons} />)
      }
    </Layout>
  );
};

export default favorites;
