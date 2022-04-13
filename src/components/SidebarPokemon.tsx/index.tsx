import { Button, ButtonContainer, Container } from "./styles";

import { usePokemons } from "../../context/usePokemons";

export function SidebarPokemon() {
  const { pokemonsFiltered, selectedPokemon } = usePokemons();

  return (
    <Container>
      <ButtonContainer>
        {pokemonsFiltered.map((pokemon) => {
          return (
            <Button
              activeColor={pokemon.type[0]}
              key={pokemon.id}
              onClick={() => selectedPokemon(pokemon.id)}
            >
              <div>
                <img src={pokemon.image} alt={pokemon.name} />
              </div>

              <h1>{pokemon.name}</h1>
            </Button>
          );
        })}
      </ButtonContainer>
    </Container>
  );
}
