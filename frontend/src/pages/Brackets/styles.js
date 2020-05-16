import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #83c180;

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

    .title {
      display: flex;
      width: 150px;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: #fff;
      border-radius: 4px;
      transition: all 0.2s ease-in-out;

      :hover {
        transform: scale(1.1);
        box-shadow: 0 0 100px rgba(0, 0, 0, 0.2);
      }
    }
  }
`;
