import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import api from '../../services/api';

import { Container, Content } from './styles';

export interface Category {
  id: number;
  name: string;
}

const NavigationMenu: React.FC = () => {
  const [classes, setClasses] = useState<Category[]>([]);

  useEffect(() => {
    async function loadCategories() {
      const response = await api.get('/categories');
      setClasses(response.data);
    }

    loadCategories();
  }, []);

  return (
    <Container>
      <Content>
        <nav>
          {classes.map(c => (
            <NavLink
              to={`/subscriptionList/${c.id}`}
              key={c.id}
              activeStyle={{ color: '#32067c', textDecoration: 'underline' }}
            >
              {c.name}
            </NavLink>
          ))}
        </nav>
      </Content>
    </Container>
  );
};

export default NavigationMenu;
