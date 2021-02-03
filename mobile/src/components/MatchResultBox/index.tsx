import React from 'react';

import {
  Result,
  FirstPlayerInfo,
  SecondPlayerInfo,
  Name,
  Score,
  Set,
  Header,
  CategoryName,
  MatchTime,
} from './styles';

interface MatchResultBoxProps {
  data: string;
  className?: string;
}

const MatchResultBox: React.FC<MatchResultBoxProps> = ({ data }) => {
  return (
    <Result>
      <Header>
        <CategoryName>Name</CategoryName>
        <MatchTime>13:00hs</MatchTime>
      </Header>
      <FirstPlayerInfo>
        <Name>{data}</Name>
        <Score>
          <Set>0</Set>
          <Set>0</Set>
          <Set>0</Set>
        </Score>
      </FirstPlayerInfo>

      <SecondPlayerInfo>
        <Name>{data}</Name>
        <Score>
          <Set>0</Set>
          <Set>0</Set>
          <Set>0</Set>
        </Score>
      </SecondPlayerInfo>
    </Result>
  );
};

export default MatchResultBox;
