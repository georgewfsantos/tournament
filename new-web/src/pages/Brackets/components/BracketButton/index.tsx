import React from 'react';

import { useHistory } from 'react-router-dom';
import { Container } from './styles';

import { Category } from '../..';
import { useAuth } from '../../../../hooks/auth';

interface BracketButtonProps {
  category: Category;
}

const BracketButton: React.FC<BracketButtonProps> = ({ category }) => {
  const { user } = useAuth();
  const history = useHistory();

  const handleBracketsNavigation = () => {
    return user
      ? history.push(`/brackets/bracketItem/${category.id}`)
      : history.push(`/brackets/bracketDisplay/${category.id}`);
  };

  return (
    <Container>
      <div className="title">
        <button type="button" onClick={handleBracketsNavigation}>
          {category.name}
        </button>
      </div>
    </Container>
  );
};

export default BracketButton;
