import styled from 'styled-components';
import { lighten } from 'polished';

export const Wrapper = styled.div`
  background: #83c180;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
`;

export const Content = styled.div`
  background: #fff;
  width: 100%;
  max-width: 360px;
  text-align: center;
  padding: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  img {
    margin-top: 25px;
    width: 80px;
    height: 80px;
    margin-bottom: 10px;
  }

  .title strong {
    color: #566468;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 18px;
    padding: 25px;
    input {
      background: rgba(131, 193, 128, 0.6);

      border: solid 1px #dddddd;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #000;
      margin: 0 0 10px;
      color: #566468;
      &::placeholder {
        color: #fff;
      }
    }
    span {
      color: #ee4d64;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    textarea {
      width: 100%;
      height: 127px;
      border-radius: 4px;
      border: solid 1px #dddddd;
      color: #566468;
      font-size: 14px;
      padding: 10px;
      resize: none;
      margin-bottom: 10px;
      &::placeholder {
        color: #fff;
      }

      background: rgba(131, 193, 128, 0.6);
    }
    button {
      margin: 5px 0 0;
      height: 44px;
      background: #566468;
      color: #fff;
      font-weight: bold;
      font-size: 16px;
      border: 0;
      border-radius: 4px;
      transition: background 0.2s;
      &:hover {
        background: ${lighten(0.08, '#6e706c')};
      }
    }

    a {
      color: #83c180;
      font-size: 18px;
      font-weight: bold;
      margin-top: 15px;

      &:hover {
        color: ${lighten(0.08, '#83c180')};
      }
    }
  }
`;