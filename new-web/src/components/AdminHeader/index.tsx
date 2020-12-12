import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '~/assets/racket.svg';

import { Container, Content } from './styles';

const AdminHeader: React.FC = () =>  {
  return (
    <Container>
      <Content>
        <nav>
          <NavLink to="/">
            <img src={logo} alt="Tennis Racket" />
          </NavLink>

          <NavLink to="/dashboard" activeStyle={{ color: '#444444' }}>
            CHAVES
          </NavLink>
        </nav>
      </Content>
    </Container>
  );
}

export default AdminHeader;
