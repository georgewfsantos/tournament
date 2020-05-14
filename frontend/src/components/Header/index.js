import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import logo from '~/assets/racket.svg';

import { Container, Content } from './styles';

function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <Link to="/">
            <img src={logo} alt="Tennis Racket" />
          </Link>
          <NavLink
            className="first-link"
            to="/subscriptions"
            activeStyle={{ color: '#444444' }}
          >
            INSCRIÇÕES
          </NavLink>
          <NavLink to="/login" activeStyle={{ color: '#444444' }}>
            ADMIN
          </NavLink>
        </nav>
      </Content>
    </Container>
  );
}

export default Header;
