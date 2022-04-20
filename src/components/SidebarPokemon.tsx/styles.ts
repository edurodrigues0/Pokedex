import { BackgroundProps, colors } from '../../utils/typesCSS';

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 20rem;
  padding: 1rem;
`

export const ButtonContainer = styled.div`
  flex-direction: column;
`

export const Button = styled.button<BackgroundProps>`
  background: #808080 ;
  width: 15rem;
  height: 5rem;
  padding: 0.5rem;
  margin-bottom: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border: 2.5px solid;
  border-color: ${(props) => colors[props.activeColor]};
  border-radius: 1rem 0 0 1rem;

  div {
    img {
      height: 3.5rem;
      border-radius: 100%;
    }
  }

  h1 {
    color: var(--primary-white);
  }

  transition: all 0.2s;

  &:hover {
    height: 5.5rem;
    background-color: #909090;
  }

  &:active {
    color: var(--primary-yellow);
  }
`