import React, { useEffect, useState } from 'react';
import MatchBox from '../../components/MatchBox';
import api from '../../services/api';

import { Container } from './styles';

import { Result } from '../Results';

const AdminResults: React.FC = () => {
  const [results, setResults] = useState<Result[]>([]);

  useEffect(() => {
    async function loadResults() {
      const response = await api.get('/results');

      setResults(response.data);
    }
    loadResults();
  }, []);
  return (
    <Container>
      <div className="grid-container">
        {results.map(result => (
          <MatchBox key={result.id} result={result} />
        ))}
      </div>
    </Container>
  );
};

export default AdminResults;
