import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Category } from '../Brackets';

import { Container } from './styles';
import api from '../../services/api';

const SubscriptionView: React.FC = () => {
  const [classes, setClasses] = useState<Category[]>([]);

  useEffect(() => {
    async function loadCategories() {
      const response = await api.get('/categories');
      setClasses(response.data);
    }

    loadCategories();
  }, []);
  return (
    <Container>
      <h1>Ver Inscritos</h1>

      <div className="option-container">
        {classes.map((category: Category) => (
          <Link
            to={`/subscriptionView/subscriptionList/${category.id}`}
            key={category.id}
          >
            {category.name}
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default SubscriptionView;
