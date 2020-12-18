import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.button`
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
`;
