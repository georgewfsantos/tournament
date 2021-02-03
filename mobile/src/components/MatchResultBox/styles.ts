import styled from 'styled-components/native';

export const Result = styled.View`
  align-items: center;
  justify-content: space-between;
  width: 350px;
  height: 180px;
  background-color: #fff;
  margin: 12px;
  /* border-top-left-radius: 5px;
  border-top-right-radius: 5px; */
  border-radius: 5px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 40px;
  background-color: #32067c;
  padding: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

export const CategoryName = styled.Text`
  color: #fff;
  font-weight: 700;
`;
export const MatchTime = styled.Text`
  color: #fff;
  font-weight: 700;
`;

export const FirstPlayerInfo = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 70px;
  justify-content: space-between;
  background-color: #f7f7f7;
  padding: 5px;
`;

export const SecondPlayerInfo = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 70px;
  justify-content: space-between;
  background-color: #fff;
  padding: 5px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

export const Name = styled.Text``;

export const Score = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 60px;
`;

export const Set = styled.Text`
  width: 33.33%;
`;
