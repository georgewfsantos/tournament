import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import api from '../../../services/api';
import { BracketItemParams } from '../../Brackets/BracketItem';

import { Container, Content, ListRow } from './styles';

interface Category {
  id: number;
  name: string;
}

interface Player {
  id: number;
  name: string;
  email: string;
  category_id: string;
  phone_number: string;
  guests: string;
  restrictions: string;
  createdAt: string;
}

const SubscriptionList: React.FC = () => {
  const { categoryId } = useParams<BracketItemParams>();
  const [category, setCategory] = useState({} as Category);
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    async function loadPlayers() {
      const response = await api.get(`/categories/${categoryId}`);
      const playersResponse = await api.get(`/players/${categoryId}`);

      setCategory(response.data);
      setPlayers(playersResponse.data);
    }

    loadPlayers();
  }, [categoryId]);

  return (
    <Container>
      <h1>{category?.name}</h1>
      <Content>
        <ListRow id="list-header">
          <p>Nome do jogador</p>
          <p>Telefone</p>
          <p>Data de inscrição</p>
          <p>Observações</p>
        </ListRow>

        {players?.map(player => (
          <ListRow key={player.id}>
            <p>{player.name}</p>
            <p>{player.phone_number}</p>
            <p>{format(new Date(player.createdAt), 'dd/MM/yyyy')}</p>
            <p>{player.restrictions ? player.restrictions : ' '}</p>
          </ListRow>
        ))}
      </Content>
    </Container>
  );
};

export default SubscriptionList;
