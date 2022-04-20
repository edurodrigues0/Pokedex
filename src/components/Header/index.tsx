import { Container, Content } from './styles';

import { usePokemons } from '../../context/usePokemons';

export function Header() {
  const { handleSearch } = usePokemons();
  
  return(
    <Container>
      <Content>
        <h1>Pokédex</h1>
        <div>
          <h3>Nome ou número</h3>
          <input
            id='pokemonSearch'
            type='text'
            placeholder='Procurar'
            onChange={handleSearch}
          />
        </div>
      </Content>
    </Container>
  );
}