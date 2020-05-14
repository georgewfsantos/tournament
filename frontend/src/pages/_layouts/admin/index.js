import React from 'react';
import Proptypes from 'prop-types';

import AdminHeader from '~/components/AdminHeader';

import { Wrapper } from './styles';

export default function AdminLayout({ children }) {
  return (
    <Wrapper>
      <AdminHeader />
      {children}
    </Wrapper>
  );
}

AdminLayout.propTypes = {
  children: Proptypes.element.isRequired,
};
