import React from 'react';

import { useHistory } from 'react-router-dom';
import { Container } from './styles';

import { Category } from '../..';

interface BracketButtonProps {
  category: Category;
}

const BracketButton: React.FC<BracketButtonProps> = ({ category }) => {
  const history = useHistory();
  return (
    <Container>
      <div className="title">
        <button
          type="button"
          onClick={() => history.push(`/brackets/bracketItem/${category.id}`)}
        >
          {category.name}
        </button>
      </div>
    </Container>
  );
};

export default BracketButton;
