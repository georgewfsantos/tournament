import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

import Header from '~/components/Header';

export default function StandardLayout({ children }) {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
}

StandardLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
