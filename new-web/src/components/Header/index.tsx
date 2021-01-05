import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../../assets/racket.svg';

import { useAuth } from '../../hooks/auth';
import api from '../../services/api';

import { Category } from '../NavigationMenu';

import { Container, Content } from './styles';

const Header: React.FC = () => {
  const { user } = useAuth();
  const [classes, setClasses] = useState<Category[]>();

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
          <NavLink to="/signIn">
            <img src={logo} alt="Tennis Racket" />
          </NavLink>

          <NavLink
            className="first-link"
            to={`${user ? '/subscriptionView' : '/subscriptions'}`}
            activeStyle={{ color: '#32067c' }}
          >
            Inscrições
          </NavLink>
          <NavLink to="/brackets" activeStyle={{ color: '#32067c' }}>
            Chaves
          </NavLink>
          {!user && (
            <NavLink to="/signIn" activeStyle={{ color: '#32067c' }}>
              Admin
            </NavLink>
          )}

          <NavLink
            to={`${user ? '/editResults' : 'results'}`}
            activeStyle={{ color: '#32067c' }}
          >
            Resultados
          </NavLink>
        </nav>
      </Content>
    </Container>
  );
};

export default Header;
