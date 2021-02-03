import React from 'react';
import { Text } from 'react-native';

import { Container, List, ListItem } from './styles';

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
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={mockData}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <>
            <ListItem>
              <Text>{item}</Text>
            </ListItem>
          </>
        )}
      />
    </Container>
  );
};

export default ListComponent;
