import React, { useState, useEffect } from 'react';

import api from '~/services/api';

import { Container } from './styles';

import Header from '~/components/Header';

function Brackets() {
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
      <Header />
      <Container>
        <h1>Chaves</h1>
        <div className="option-container">
          {categories.map((category) => (
            <div className="title">
              <button type="button">{category.name}</button>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}

export default Brackets;
