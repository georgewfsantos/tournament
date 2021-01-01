import React from 'react';
// import NavigationMenu from '../../components/NavigationMenu';

import { Container, Content, ListRow } from './styles';

const SubscriptionList: React.FC = () => {
  return (
    <Container>
      {/* <NavigationMenu /> */}
      <Content>
        <ListRow>
          <p>Nome do jogador</p>
          <p>Classe</p>
          <p>Telefone</p>
          <p>Data de inscrição</p>
          <p>Outra opção...</p>
        </ListRow>

        <ListRow>
          <p>John Doe</p>
          <p>Classe 1</p>
          <p>64 99999-3537</p>
          <p>25/02/2021</p>
          <p>Outra opção...</p>
        </ListRow>

        <ListRow>
          <p>John Doe</p>
          <p>Classe 1</p>
          <p>64 99999-3537</p>
          <p>25/02/2021</p>
          <p>Outra opção...</p>
        </ListRow>

        <ListRow>
          <p>John Doe</p>
          <p>Classe 1</p>
          <p>64 99999-3537</p>
          <p>25/02/2021</p>
          <p>Outra opção...</p>
        </ListRow>

        <ListRow>
          <p>John Doe</p>
          <p>Classe 1</p>
          <p>64 99999-3537</p>
          <p>25/02/2021</p>
          <p>Outra opção...</p>
        </ListRow>

        <ListRow>
          <p>John Doe</p>
          <p>Classe 1</p>
          <p>64 99999-3537</p>
          <p>25/02/2021</p>
          <p>Outra opção...</p>
        </ListRow>
      </Content>
    </Container>
  );
};

export default SubscriptionList;
