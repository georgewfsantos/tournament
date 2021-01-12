import React, { useEffect, useState } from 'react';
import EmptyListContainer from '../../components/EmptyListContainer';
import MatchBox from '../../components/MatchBox';
import api from '../../services/api';

import { Container } from './styles';

export interface Result {
  id: string;
  category: string;
  match_date: Date;
  player_1: string;
  player_1_score_1: string;
  player_1_score_2: string;
  player_1_score_3: string;
  player_2: string;
  player_2_score_1: string;
  player_2_score_2: string;
  player_2_score_3: string;
}

const Results: React.FC = () => {
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
      {results.length ? (
        <div className="grid-container">
          {results.map(result => (
            <MatchBox key={result.id} result={result} />
          ))}
        </div>
      ) : (
        <EmptyListContainer>
          Não há resultados registrados até o momento
        </EmptyListContainer>
      )}
    </Container>
  );
};

export default Results;
