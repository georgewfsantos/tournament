import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';
import history from '~/services/history';

export default function BracketButton({ category }) {
  return (
    <Container>
      <div className="title">
        <button
          type="button"
          onClick={() => history.push(`/bracketItem/${category.id}`)}
        >
          {category.name}
        </button>
      </div>
    </Container>
  );
}

BracketButton.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};
