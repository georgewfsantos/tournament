import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 500px;
  flex-direction: column;

  background-color: #fff;
  border-radius: 5px 5px 0 0;

  margin: 20px auto; // delete this later

  text-transform: uppercase;
`;

export const BoxHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  background-color: #32067c;
  height: 30px;

  padding: 5px;

  border-radius: 5px 5px 0 0;

  text-transform: uppercase;

  p {
    color: #fefefe;
    font-size: 12px;
    font-weight: 500;
  }
`;

export const Content = styled.div`
  .player-two {
    background: #f2f2f2;
    color: #232129cc;
  }
`;

export const PlayerInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 5px;
  font-size: 14px;
`;

export const PlayerScore = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50px;

  &:last-child {
    margin-top: 5px;
  }
`;

export const SetScore = styled.div`
  width: 20px;
`;

export const PlayerName = styled.div``;
