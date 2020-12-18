import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  max-width: 700px;

  form {
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 80px 0;
    flex-direction: column;

    h1 {
      margin-bottom: 24px;
    }
  }
`;
