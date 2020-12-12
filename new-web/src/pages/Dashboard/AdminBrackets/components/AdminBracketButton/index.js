import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';
import history from '~/services/history';

export default function AdminBracketButton({ category }) {
  return (
    <Container>
      <div className="title">
        <button
          type="button"
          onClick={() =>
            history.push(`/dashboard/adminBracketItem/${category.id}`)
          }
        >
          {category.name}
        </button>
      </div>
    </Container>
  );
}

AdminBracketButton.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};
