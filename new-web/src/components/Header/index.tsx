import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../../assets/racket.svg';

import { Container, Content } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <nav>
          <NavLink to="/">
            <img src={logo} alt="Tennis Racket" />
          </NavLink>
          <NavLink
            className="first-link"
            to="/subscriptions"
            activeStyle={{ color: '#32067c' }}
          >
            INSCRIÇÕES
          </NavLink>
          <NavLink to="/brackets" activeStyle={{ color: '#32067c' }}>
            CHAVES
          </NavLink>
          <NavLink to="/login" activeStyle={{ color: '#32067c' }}>
            ADMIN
          </NavLink>
        </nav>
      </Content>
    </Container>
  );
};

export default Header;
