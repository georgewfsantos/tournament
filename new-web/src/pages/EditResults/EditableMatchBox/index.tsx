import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { FiList } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import { useToast } from '../../../hooks/toast';

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
import api from '../../../services/api';
import getValidationErrors from '../../../utils/getValidationErrors';

interface ResultFormData {
  catgegory: string;
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

const EditableMatchBox: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: ResultFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          match_date: Yup.date().required('Campo obrigatório'),
          category: Yup.string().required('Campo obrigatório'),
          player_1: Yup.string().required('Campo obrigatório'),
          player_1_score_1: Yup.number().required('Campo obrigatório'),
          player_1_score_2: Yup.number().required('Campo obrigatório'),
          player_1_score_3: Yup.number(),
          player_2: Yup.string().required('Campo obrigatório'),
          player_2_score_1: Yup.number().required('Campo obrigatório'),
          player_2_score_2: Yup.number().required('Campo obrigatório'),
          player_2_score_3: Yup.number(),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/results', data);

        addToast({
          type: 'success',
          title: 'Dados Cadastrados com sucesso',
          description: 'O resultado já pode ser visualizado.',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          formRef.current?.reset();
        }
        addToast({
          type: 'error',
          title: 'Erro na Autenticação',
          description:
            'Não foi possível realizar o login. Verifique seus dados.',
        });
      }
    },
    [addToast],
  );
  return (
    <MainContent>
      <h1>Cadastrar um Resultado</h1>
      <Form onSubmit={handleSubmit}>
        <Container>
          <BoxHeader>
            <BracketInput
              className="category-name"
              name="category"
              placeholder="Nome da classe"
            />
            <BracketInput type="date" className="date" name="match_date" />
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
                    name="player_1_score_2"
                    defaultValue="0"
                  />
                </SetScore>
                <SetScore>
                  <ResultInput
                    type="number"
                    className="player-score"
                    name="player_1_score_3"
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
