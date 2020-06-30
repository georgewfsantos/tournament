import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  background: #83c180;

  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  background: #ffff;
  display: flex;
  width: 100%;
  max-width: 360px;
  height: 450px;
  border-radius: 5px;
  flex-direction: column;

  img {
    width: 80px;
  }
`;
