import styled from 'styled-components';
import tennisBg from '../../assets/purple_tennis_ball.png';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

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

    a {
      display: flex;
      width: 150px;
      height: 150px;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: url(${tennisBg}) no-repeat center;
      border-radius: 50%;
      transition: all 0.2s ease-in-out;

      color: #fff;
      text-transform: capitalize;
      text-decoration: double;
      font-weight: 500;

      :hover {
        transform: scale(1.1);
        box-shadow: 0 0 100px rgba(0, 0, 0, 0.2);
      }
    }
  }
`;
