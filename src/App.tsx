import { BodyContainer, CentralCard, Container } from "./homeStyle";

import { Header } from "./components/Header";
import { InformationCard } from "./components/InformationCard";
import { PokemonsProvider } from "./context/usePokemons";
import { SidebarPokemon } from "./components/SidebarPokemon.tsx";

export function App() {
  return (
    <PokemonsProvider>
      <Container>
        <Header />

        <BodyContainer>
          <CentralCard>
            <InformationCard />
          </CentralCard>

          <SidebarPokemon />
        </BodyContainer>
      </Container>
    </PokemonsProvider>
  );
}
