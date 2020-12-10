import React, { useState, useEffect } from 'react';

import api from '~/services/api';

import { Container } from './styles';

import AdminHeader from '~/components/AdminHeader';
import AdminBracketButton from '~/pages/Dashboard/AdminBrackets/components/AdminBracketButton';

function AdminBrackets() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function loadCategories() {
      const response = await api.get('/categories');

      setCategories(response.data);
    }
    loadCategories();
  }, []);
  return (
    <>
      <AdminHeader />
      <Container>
        <h1>Chaves</h1>
        <div className="option-container">
          {categories.map((category) => (
            <AdminBracketButton key={category.id} category={category} />
          ))}
        </div>
      </Container>
    </>
  );
}

export default AdminBrackets;
