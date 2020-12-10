import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  justify-content: center;
  background-color: paleturquoise;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 700px;

  form {
    width: 340px;
    margin: 80px 0;
    text-align: center;
    align-items: center;

    h1 {
      margin-bottom: 24px;
    }

    input {
      background: #232129;
      border: 2px solid #232129;
      border-radius: 10px;
      padding: 16px;
      width: 100%;

      & + input {
        margin-top: 8px;
      }
    }

    button {
      width: 100%;
      height: 56px;
      background: #ff9000;
      border: 0;
      border-radius: 10px;
      padding: 16px;
      color: #312e38;
      font-weight: bold;
      margin-top: 16px;
    }
  }
`;
