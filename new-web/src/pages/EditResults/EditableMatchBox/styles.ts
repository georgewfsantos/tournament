import { lighten } from 'polished';
import styled from 'styled-components';
import BracketInput from '../../Brackets/components/BracketInput';

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-top: 10px;
  }

  .button-container {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;

    button {
      margin: 10px;
      background: #32067c;
      border: 0;
      padding: 5px 8px;
      color: #fefefe;
      border-radius: 5px;
      font-weight: 500;
      transition: 0.2s background-color;

      &:hover {
        background: ${lighten(0.2, '#32067c')};
      }
    }
  }

  .see-results {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 20px;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;

      &:hover {
        color: ${lighten(0.2, '#32067c')};
      }

      svg {
        margin-right: 10px;
      }
    }
  }
`;

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

    input {
      font-size: 14px;
    }

    .category-name,
    .date {
      color: #fefefe;
      font-weight: 500;
    }

    .category-name {
      &::placeholder {
        font-size: 16px;
      }
    }

    .date {
      text-align: end;
    }
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

  .player {
    text-transform: uppercase;
    font-size: 16px;
  }
`;

export const PlayerScore = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 150px;

  &:last-child {
    margin-top: 5px;
  }
`;

export const SetScore = styled.div`
  width: 33.33%;
  .player-score {
    padding: 5px;
    text-align: center;
  }
`;

export const PlayerName = styled.div``;

export const ResultInput = styled(BracketInput)`
  width: 100%;
`;
