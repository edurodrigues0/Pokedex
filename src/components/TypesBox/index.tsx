import { Container } from "./styles";

interface TypeBoxProps {
  type: string;
  color: any;
}

export function TypesBox({type, color}:TypeBoxProps) {
  return (
    <Container activeColor={color}>
      <p>{type}</p>
    </Container>
  );
}
