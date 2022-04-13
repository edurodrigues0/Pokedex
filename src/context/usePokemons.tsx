import {
  ChangeEvent,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { Pokemon } from "../utils/types";
import { api } from "../services/api";

interface PokemonsProviderProps {
  children: ReactNode;
}

interface PokemonsContextData {
  pokemonsFiltered: Pokemon[];
  pokeCard: Pokemon;
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  selectedPokemon: (id: number) => void;
}

const PokemonsContext = createContext<PokemonsContextData>(
  {} as PokemonsContextData
);

export function PokemonsProvider({ children }: PokemonsProviderProps) {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [search, setSearch] = useState("");
  const [pokeCard, setPokeCard] = useState<Pokemon>(pokemons[0]);

  useEffect(() => {
    api.get(`pokemons`).then((response) => setPokemons(response.data));
  }, []);

  const pokemonsFiltered = pokemons.filter((pokemon) => {
    if (
      pokemon.name.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) >
        -1 ||
      pokemon.num.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) > -1
    ) {
      return true;
    } else {
      return false;
    }
  });

  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  async function selectedPokemon(id: number) {
    await api
      .get(`pokemons/${id}`)
      .then((response) => setPokeCard(response.data));
  }

  return (
    <PokemonsContext.Provider
      value={{
        pokemonsFiltered,
        handleSearch,
        selectedPokemon,
        pokeCard,
      }}
    >
      {children}
    </PokemonsContext.Provider>
  );
}

export function usePokemons() {
  const context = useContext(PokemonsContext);

  return context;
}
