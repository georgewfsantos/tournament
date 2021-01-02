import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../../assets/racket.svg';

import { useAuth } from '../../hooks/auth';

import { Container, Content } from './styles';

const Header: React.FC = () => {
  const { user } = useAuth();

  return (
    <Container>
      <Content>
        <nav>
          <NavLink to="/signIn">
            <img src={logo} alt="Tennis Racket" />
          </NavLink>

          <NavLink
            className="first-link"
            to={`${user ? '/subscriptionList' : '/subscriptions'}`}
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
            Results
          </NavLink>
        </nav>
      </Content>
    </Container>
  );
};

export default Header;
