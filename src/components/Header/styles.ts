import styled from 'styled-components';

export const Container = styled.header`
  background: var(--primary-blue);
  height: 6rem;
  padding: 0.5rem;
`

export const Content = styled.div`
  display: flex;
  margin: 0 auto 0;
  align-items: center;
  justify-content: space-between;
  max-width: 720px;
  padding: 1rem 2rem;

  h1 {
    font-size: 3rem;
    color: var(--secondary-yellow);
  }

  div {
    h3 {
      color: var(--secondary-yellow);
      margin: 0 0.5rem;
    }
    
    input {
    width: 18rem;
    padding: 0.5rem;
    border-radius: 0.75rem;
    color: var(--primary-black);
    font-size: 1.2rem;
    border: transparent;
  }
  }
`