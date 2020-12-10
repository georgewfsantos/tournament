import styled from 'styled-components';

export const Container = styled.div`
  .title {
    display: flex;
    width: 150px;
    height: 100%;
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
`;
