import React, { useMemo } from 'react';

import { format } from 'date-fns';

import { Result } from '../../pages/Results';

import {
  Container,
  BoxHeader,
  Content,
  PlayerInfo,
  PlayerName,
  PlayerScore,
  SetScore,
} from './styles';

interface MathcBoxProps {
  result: Result;
}

const MatchBox: React.FC<MathcBoxProps> = ({ result }) => {
  const formattedDate = useMemo(() => {
    return format(new Date(result.match_date), 'dd/MM/yyyy');
  }, [result.match_date]);

  return (
    <Container>
      <BoxHeader>
        <p>{result.category}</p>
        <p>{formattedDate}</p>
      </BoxHeader>
      <Content>
        <PlayerInfo>
          <PlayerName>{result.player_1}</PlayerName>
          <PlayerScore>
            <SetScore>{result.player_1_score_1}</SetScore>
            <SetScore>{result.player_1_score_2}</SetScore>
            {result.player_1_score_3 && (
              <SetScore>{result.player_1_score_3}</SetScore>
            )}
          </PlayerScore>
        </PlayerInfo>

        <PlayerInfo className="player-two">
          <PlayerName>{result.player_2}</PlayerName>
          <PlayerScore>
            <SetScore>{result.player_2_score_1}</SetScore>
            <SetScore>{result.player_2_score_2}</SetScore>
            {result.player_2_score_3 && (
              <SetScore>{result.player_2_score_3}</SetScore>
            )}
          </PlayerScore>
        </PlayerInfo>
      </Content>
    </Container>
  );
};

export default MatchBox;
