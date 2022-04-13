import { BackgroundProps, colors } from '../../utils/typesCSS';

import styled from "styled-components";

export const Container = styled.div`
  width: 25.4rem;
  height: 40.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5rem;
  background: linear-gradient(to left, var(--primary-blue) 0.49%, var(--primary-yellow) 100%);

  border-radius: 1rem;
`
export const CardWrapper = styled.div<BackgroundProps>`
  width: 25rem;
  height: 40rem;
  background: ${(props) => colors[props.activeColor]};
  flex-direction: column;
  border-radius: 1rem;

  display: flex;
`

export const PokemonImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  
  margin-top: 2rem;
  height: 5.5rem;

  img {
    height: 9rem;
    position: absolute;
    top: -0.5rem;
  }
`

export const CardHead = styled.div`
  color: var(--primary-white);
  padding: 1rem 2.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 2.5rem;
  }
`

export const CardBody = styled.div`
  background: var(--primary-white);
  flex: 1;

  border-radius: 0 0 1rem 1rem;
  padding: 4rem 1rem 0 1rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-around;

    p {
      font-size: 1.3rem;
      font-weight: 700;

      span {
        font-size: 1.3rem;
        font-weight: 500;
      }
    }
  }
`

export const Divider = styled.div`
  height: 0.15rem;
  width: 100%;
  background-color: #C0C0C0;
  border-radius: 8px;
  margin: 0.5rem 0;
`

export const Evolutions = styled.div`
  height: 9.5rem;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 1rem;
  margin-top: 1rem;
`

export const NextEvolutions = styled.div`
  width: 10rem;
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.3rem;

  
  button {
    background-color: var(--primary-white);
    border: 0.5 solid;
    border-radius: 8px;
  }
  
  div {
    flex-direction: column;
    img {
      height: 4rem;
    }

    h1 {
      font-size: 1.5rem;
    }
    p {
      font-size: 1rem;
      color: #8c947c;
    }
  }
`

export const Block = styled.div`
  width: 10rem;
  height: 10rem;
  margin: 1rem;
`