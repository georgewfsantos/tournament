import styled from 'styled-components';
import { lighten } from 'polished';

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

    input {
      background: rgba(35, 33, 41, 0.8);
      border-radius: 10px;
      border: 2px solid transparent;
      padding: 16px;
      width: 100%;
      color: #fff;

      & + input {
        margin-top: 8px;
      }
    }

    textarea {
      background: rgba(35, 33, 41, 0.8);
      border-radius: 10px;
      border: 2px solid transparent;
      padding: 16px;
      width: 100%;
      color: #fff;
      margin-top: 8px;
    }

    button {
      background: #32067c;
      border-radius: 10px;
      border: 0;
      padding: 0 16px;
      color: #fff;
      height: 56px;
      transition: background-color 0.2s;
      width: 100%;
      font-weight: 500;
      outline-color: transparent;

      margin-top: 16px;

      &:hover {
        background: ${lighten(0.2, '#32067c')};
      }
    }
  }
`;
