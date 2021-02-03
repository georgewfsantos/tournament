import { FlatList } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 10px;
`;

export const List = styled(FlatList as new () => FlatList<any>)`
  background-color: transparent;
`;
