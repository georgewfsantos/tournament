import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { Container, Content } from './styles';

const NavigationMenu: React.FC = () => {
  const [classes, setClasses] = useState<string[]>([]);

  useEffect(() => {
    const classesList = ['1', '2', '3', '4'];
    setClasses(classesList);
  }, []);

  return (
    <Container>
      <Content>
        <nav>
          {classes.map(c => (
            <NavLink to={`/subscriptionsList/${c}`}>{c}</NavLink>
          ))}
        </nav>
      </Content>
    </Container>
  );
};

export default NavigationMenu;
