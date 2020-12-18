import styled from 'styled-components';

export const Container = styled.div`
  background: rgba(35, 33, 41, 0.8);
  border-radius: 10px;
  border: 2px solid transparent;
  padding: 16px;
  width: 100%;
  color: #e1fffd;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #f5f5f5;

    &::placeholder {
      color: #e1fffd;
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

  svg {
    margin-right: 16px;
  }
`;
