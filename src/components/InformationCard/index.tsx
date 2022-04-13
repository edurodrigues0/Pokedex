import {
  Block,
  CardBody,
  CardHead,
  CardWrapper,
  Container,
  Divider,
  Evolutions,
  NextEvolutions,
  PokemonImage,
} from "./styles";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import { usePokemons } from "../../context/usePokemons";

export function InformationCard() {
  const { pokeCard, selectedPokemon } = usePokemons();

  return (
    <>
      {pokeCard ? (
        <Container>
          <CardWrapper activeColor={pokeCard.type[0]}>
            <CardHead>
              <h1>{pokeCard.name}</h1>
              <h2>#{pokeCard.num}</h2>
            </CardHead>

            <PokemonImage>
              <img src={pokeCard.image} alt={pokeCard.name} />
            </PokemonImage>

            <CardBody>
              <div>
                <p>
                  Height: <span>{pokeCard.height} m</span>
                </p>

                <p>
                  Type:{" "}
                  {pokeCard.type.map((t) => {
                    return <span> {t}</span>;
                  })}
                </p>

                <p>
                  Weight: <span>{pokeCard.weight} kg</span>
                </p>
              </div>
              <Divider />
              <div>
                <p>
                  Gender:{" "}
                  {pokeCard.genders.map((gender) => {
                    return <span> {gender === "Male" ? "♂" : "♀"}</span>;
                  })}
                </p>

                <p>
                  Category: <span>{pokeCard.category}</span>
                </p>

                <p>
                  Abilitie: <span>{pokeCard.abilities}</span>
                </p>
              </div>
              <Divider />
              <div>
                <p>
                  Type:{" "}
                  {pokeCard.type.map((t) => {
                    return <span> {t}</span>;
                  })}
                </p>
              </div>

              <div>
                <p>
                  Weaknesses:{" "}
                  {pokeCard.weaknesses.map((w) => {
                    return <span> {w}</span>;
                  })}
                </p>
              </div>
              <Divider />
              <Evolutions>
                {pokeCard.prev_evolution ? (
                  <div>
                    {pokeCard.prev_evolution.map((p) => {
                      return (
                        <NextEvolutions>
                          <button onClick={() => selectedPokemon(p.id)}>
                            <FiChevronLeft size={30} color="#000" />
                          </button>
                          
                          <div>
                            <img src={p.image} alt={p.name} />
                            <h1>{p.name}</h1>
                            <p>#{p.num}</p>
                          </div>
                        </NextEvolutions>
                      );
                    })}
                  </div>
                ) : (
                  <Block />
                )}

                {pokeCard.next_evolution ? (
                  <div>
                    {pokeCard.next_evolution.map((n) => {
                      return (
                        <NextEvolutions>
                          <div>
                            <img src={n.image} alt={n.name} />
                            <h1>{n.name}</h1>
                            <p>#{n.num}</p>
                          </div>
                          <button onClick={() => selectedPokemon(n.id)}>
                            <FiChevronRight size={30} color="#000" />
                          </button>
                        </NextEvolutions>
                      );
                    })}
                  </div>
                ) : (
                  <Block />
                )}
              </Evolutions>
            </CardBody>
          </CardWrapper>
        </Container>
      ) : (
        <h1>Escolha um pokemon.</h1>
      )}
    </>
  );
}
