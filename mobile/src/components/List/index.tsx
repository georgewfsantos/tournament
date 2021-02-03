import React from 'react';
import MatchResultBox from '../MatchResultBox';

import { Container, List } from './styles';

export const mockData = [
  'Hello',
  'Hi',
  'sup',
  'What',
  'Say it again',
  'Please',
];

const ListComponent: React.FC = () => {
  return (
    <Container>
      <List
        // eslint-disable-next-line react-native/no-inline-styles
        contentContainerStyle={{
          padding: 10,
          justifyContent: 'space-between',
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={mockData}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <MatchResultBox data={item} />}
      />
    </Container>
  );
};

export default ListComponent;
