import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  .grid-container {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;
