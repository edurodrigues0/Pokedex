import { BackgroundProps, colors } from '../../utils/typesCSS';

import styled from "styled-components";

export const Container = styled.div<BackgroundProps>`
  background: ${(props) => colors[props.activeColor]};
  width: 4rem;
  padding: 0.1rem;
  margin: 0 0.5rem;
  border: 1px solid;
  border-radius: 8px;

  p {
    color: var(--secondary-white);
  }
`