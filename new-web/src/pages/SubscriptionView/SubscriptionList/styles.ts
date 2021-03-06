import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    margin-top: 10px;
    text-transform: capitalize;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  color: #232129cc;
  background-color: #fefefe;
  border-radius: 10px;
  padding: 20px;

  max-width: 90%;

  #list-header {
    border: 0;
    font-weight: 500;
    margin-bottom: 10px;
  }
`;

export const ListRow = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 40fr repeat(4, 15fr);
  grid-column-gap: 15px;
  align-content: center;
  padding: 10px;

  &:not(:first-child) {
    margin-top: 8px;
  }

  &:not(:last-child) {
    border-bottom: 1px solid #232129cc;
  }
`;
