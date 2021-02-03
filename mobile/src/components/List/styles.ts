import { FlatList } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin-top: -70px;
`;

export const List = styled(FlatList as new () => FlatList<any>)`
  background-color: transparent;
`;

export const ListItem = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 350px;
  height: 180px;
  background-color: #fff;
  margin: 12px;
`;
