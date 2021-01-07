import styled from 'styled-components';
import tennisBg from '../../../../assets/purple_tennis_ball.png';

export const Container = styled.div`
  .title {
    display: flex;
    width: 150px;
    height: 150px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: url(${tennisBg}) no-repeat center;
    border-radius: 50%;
    transition: all 0.2s ease-in-out;

    :hover {
      transform: scale(1.1);
      box-shadow: 0 0 100px rgba(0, 0, 0, 0.2);
    }

    button {
      color: #fff;
      text-transform: capitalize;
      text-decoration: double;
      font-weight: 500;
    }
  }
`;
