import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import api from '../../../services/api';
import { BracketItemParams } from '../../Brackets/BracketItem';

import { Container, Content, ListRow } from './styles';

interface Player {
  id: number;
  name: string;
  email: string;
  category_id: number;
  phone_number: string;
  guests: string;
  restrictions: string;
  createdAt: string;
}

const SubscriptionList: React.FC = () => {
  const { categoryId } = useParams<BracketItemParams>();
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    async function loadPlayers() {
      const response = await api.get(`/players/${categoryId}`);

      setPlayers(response.data);
    }

    loadPlayers();
  }, [categoryId]);

  return (
    <>
      <Container>
        <Content>
          <ListRow id="list-header">
            <p>Nome do jogador</p>
            <p>Telefone</p>
            <p>Data de inscrição</p>
            <p>Outra opção...</p>
          </ListRow>

          {players?.map(player => (
            <ListRow key={player.id}>
              <p>{player.name}</p>
              <p>{player.phone_number}</p>
              <p>{player.createdAt}</p>
              <p>Outra opção...</p>
            </ListRow>
          ))}
        </Content>
      </Container>
    </>
  );
};

export default SubscriptionList;
