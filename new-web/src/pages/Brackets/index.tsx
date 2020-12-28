import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import { Container } from './styles';

import BracketButton from './components/BracketButton';

export interface Category {
  name: string;
  id: string;
}

const Brackets: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    async function loadCategories() {
      const response = await api.get('/categories');

      setCategories(response.data);
    }
    loadCategories();
  }, []);
  return (
    <>
      <Container>
        <h1>Chaves</h1>
        <div className="option-container">
          {categories.map((category: Category) => (
            <BracketButton key={category.id} category={category} />
          ))}
        </div>
      </Container>
    </>
  );
};

export default Brackets;
