import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background: rgba(35, 33, 41, 0.8);
  border-radius: 10px;
  border: 2px solid transparent;
  align-items: center;
  width: 100%;
  color: #e1fffd;
  padding: 9px;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  input {
    background: transparent;
    border: 0;
    color: #f5f5f5;

    &::placeholder {
      color: #e1fffd;
    }
  }

  svg {
    margin-right: 16px;
    margin-left: 8px;
  }
`;
