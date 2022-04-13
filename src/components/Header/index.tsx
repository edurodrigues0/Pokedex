import { Container, Content } from './styles';

import { usePokemons } from '../../context/usePokemons';

export function Header() {
  const { handleSearch } = usePokemons();
  
  return(
    <Container>
      <Content>
        <h1>Pokédex</h1>
        <input
          id='pokemonSearch'
          type='text'
          placeholder='Procurar'
          onChange={handleSearch}
        />
      </Content>
    </Container>
  );
}