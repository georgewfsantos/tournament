import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    margin-top: 10px;
  }

  .option-container {
    display: grid;
    height: 500px;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 20px;
    padding: 50px;

    button {
      background: none;
      border: none;
    }
  }
`;
