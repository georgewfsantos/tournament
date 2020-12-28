import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 10px;
  width: 100%;
  height: 100%100vh;
  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  input {
    flex: 1;
    background: transparent;
    border: 0;
    font-size: 12px;
  }

  svg {
    margin-right: 16px;
  }
`;
