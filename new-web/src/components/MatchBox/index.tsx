import React from 'react';

import {
  Container,
  BoxHeader,
  Content,
  PlayerInfo,
  PlayerName,
  PlayerScore,
  SetScore,
} from './styles';

const MatchBox: React.FC = () => {
  return (
    <Container>
      <BoxHeader>
        <p>Classe 1</p>
        <p>25/02/2021</p>
      </BoxHeader>
      <Content>
        <PlayerInfo>
          <PlayerName>Jhon Doe</PlayerName>
          <PlayerScore>
            <SetScore>6</SetScore>
            <SetScore>4</SetScore>
            <SetScore>10</SetScore>
          </PlayerScore>
        </PlayerInfo>

        <PlayerInfo className="player-two">
          <PlayerName>Jhon Doeker</PlayerName>
          <PlayerScore>
            <SetScore>3</SetScore>
            <SetScore>6</SetScore>
            <SetScore>7</SetScore>
          </PlayerScore>
        </PlayerInfo>
      </Content>
    </Container>
  );
};

export default MatchBox;
