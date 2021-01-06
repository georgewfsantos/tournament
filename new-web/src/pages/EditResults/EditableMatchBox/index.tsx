import { Form } from '@unform/web';
import React from 'react';
import { FiList } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import BracketInput from '../../Brackets/components/BracketInput';

import {
  MainContent,
  Container,
  BoxHeader,
  Content,
  PlayerInfo,
  PlayerName,
  PlayerScore,
  SetScore,
  ResultInput,
} from './styles';

const EditableMatchBox: React.FC = () => {
  return (
    <MainContent>
      <h1>Cadastrar um Resultado</h1>
      <Form
        onSubmit={() => {
          console.log('Hello');
        }}
      >
        <Container>
          <BoxHeader>
            <p>
              <BracketInput
                className="category-name"
                name="categoryName"
                placeholder="Nome da classe"
              />
            </p>
            <p>
              <BracketInput type="date" className="date" name="match_date" />
            </p>
          </BoxHeader>
          <Content>
            <PlayerInfo>
              <PlayerName>
                <ResultInput
                  className="player"
                  name="player_1"
                  placeholder="Jogador 1"
                />
              </PlayerName>
              <PlayerScore>
                <SetScore>
                  <ResultInput
                    type="number"
                    className="player-score"
                    name="player_1_score_1"
                    defaultValue="0"
                  />
                </SetScore>
                <SetScore>
                  <ResultInput
                    type="number"
                    className="player-score"
                    name="player_2_score_2"
                    defaultValue="0"
                  />
                </SetScore>
                <SetScore>
                  <ResultInput
                    type="number"
                    className="player-score"
                    name="player_3_score_3"
                    defaultValue="0"
                  />
                </SetScore>
              </PlayerScore>
            </PlayerInfo>

            <PlayerInfo className="player-two">
              <PlayerName>
                <ResultInput
                  className="player"
                  name="player_2"
                  placeholder="Jogador 2"
                />
              </PlayerName>
              <PlayerScore>
                <SetScore>
                  <ResultInput
                    type="number"
                    className="player-score"
                    name="player_2_score_1"
                    defaultValue="0"
                  />
                </SetScore>
                <SetScore>
                  <ResultInput
                    type="number"
                    className="player-score"
                    name="player_2_score_2"
                    defaultValue="0"
                  />
                </SetScore>
                <SetScore>
                  <ResultInput
                    type="number"
                    className="player-score"
                    name="player_2_score_3"
                    defaultValue="0"
                  />
                </SetScore>
              </PlayerScore>
            </PlayerInfo>
          </Content>
        </Container>
        <div className="button-container">
          <button type="submit">Enviar</button>
        </div>

        <div className="see-results">
          <Link to="/results">
            <FiList size={20} color="#32067c" />
            Clique aqui para ver resultados
          </Link>
        </div>
      </Form>
    </MainContent>
  );
};

export default EditableMatchBox;
