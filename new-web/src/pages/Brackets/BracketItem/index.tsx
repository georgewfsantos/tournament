import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import api from '../../../services/api';
import { useToast } from '../../../hooks/toast';

import BracketInput from '../components/BracketInput';

import './styles.css';

export interface BracketItemParams {
  categoryId: string;
}

export interface BracketFormat {
  name: string;
  player_1: string;
  player_2: string;
  player_3: string;
  player_4: string;
  player_5: string;
  player_6: string;
  player_7: string;
  player_8: string;
  player_9: string;
  player_10: string;
  player_11: string;
  player_12: string;
  player_13: string;
  player_14: string;
  player_15: string;
  player_16: string;
  player_17: string;
  player_18: string;
  player_19: string;
  player_20: string;
  player_21: string;
  player_22: string;
  player_23: string;
  player_24: string;
  player_25: string;
  player_26: string;
  player_27: string;
  player_28: string;
  player_29: string;
  player_30: string;
  player_31: string;
  player_32: string;
  player_33: string;
  player_34: string;
  player_35: string;
  player_36: string;
  player_37: string;
  player_38: string;
  player_39: string;
  player_40: string;
  player_41: string;
  player_42: string;
  player_43: string;
  player_44: string;
  player_45: string;
  player_46: string;
  player_47: string;
  player_48: string;
  player_49: string;
  player_50: string;
  player_51: string;
  player_52: string;
  player_53: string;
  player_54: string;
  player_55: string;
  player_56: string;
  player_57: string;
  player_58: string;
  player_59: string;
  player_60: string;
  player_61: string;
  player_62: string;
  player_63: string;
}

const BracketItem: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { categoryId } = useParams<BracketItemParams>();

  const { addToast } = useToast();

  const [players, setPlayers] = useState<BracketFormat>({} as BracketFormat);

  useEffect(() => {
    async function loadPlayers() {
      const response = await api.get(`/brackets/${categoryId}`);

      const bracketObject = {
        player_1: players.player_1,
        player_2: players.player_2,
        player_3: players.player_3,
        player_4: players.player_4,
        player_5: players.player_5,
        player_6: players.player_6,
        player_7: players.player_7,
        player_8: players.player_8,
        player_9: players.player_9,
        player_10: players.player_10,
        player_11: players.player_11,
        player_12: players.player_12,
        player_13: players.player_13,
        player_14: players.player_14,
        player_15: players.player_15,
        player_16: players.player_16,
        player_17: players.player_17,
        player_18: players.player_18,
        player_19: players.player_19,
        player_20: players.player_20,
        player_21: players.player_21,
        player_22: players.player_22,
        player_23: players.player_23,
        player_24: players.player_24,
        player_25: players.player_25,
        player_26: players.player_26,
        player_27: players.player_27,
        player_28: players.player_28,
        player_29: players.player_29,
        player_30: players.player_30,
        player_31: players.player_31,
        player_32: players.player_32,
        player_33: players.player_33,
        player_34: players.player_34,
        player_35: players.player_35,
        player_36: players.player_36,
        player_37: players.player_37,
        player_38: players.player_38,
        player_39: players.player_39,
        player_40: players.player_40,
        player_41: players.player_41,
        player_42: players.player_42,
        player_43: players.player_43,
        player_44: players.player_44,
        player_45: players.player_45,
        player_46: players.player_46,
        player_47: players.player_47,
        player_48: players.player_48,
        player_49: players.player_49,
        player_50: players.player_50,
        player_51: players.player_51,
        player_52: players.player_52,
        player_53: players.player_53,
        player_54: players.player_54,
        player_55: players.player_55,
        player_56: players.player_56,
        player_57: players.player_57,
        player_58: players.player_58,
        player_59: players.player_59,
        player_60: players.player_60,
        player_61: players.player_61,
        player_62: players.player_62,
        player_63: players.player_63,
      };

      formRef.current?.setData(bracketObject);
      setPlayers(response.data);
    }
    loadPlayers();
  }, [categoryId]);

  const handleSubmit = useCallback(
    async (data: BracketFormat) => {
      try {
        formRef.current?.setErrors({});

        await api.post(`/brackets/${categoryId}`, data);

        addToast({
          type: 'success',
          title: 'Dados Cadastrados com sucesso',
          description: 'A chave está pronta para visualização.',
        });
      } catch (err) {
        addToast({
          type: 'error',
          title: 'Erro na Autenticação',
          description:
            'Não foi possível atualizar a chave. Verifique seus dados.',
        });
      }
    },
    [addToast, categoryId],
  );

  return (
    <>
      <Form onSubmit={handleSubmit} ref={formRef} initialData={players}>
        <section id="bracket">
          <div className="container">
            <div className="split split-one">
              <div className="round round-one current">
                <div className="round-details">
                  Rodada 1
                  <br />
                </div>
                <ul className="matchup">
                  <li className="team team-top">
                    <BracketInput name="player_1" />
                    <span className="score">76</span>
                  </li>
                  <li className="team team-bottom">
                    <BracketInput name="player_2" />
                    <span className="score">82</span>
                  </li>
                </ul>
                <ul className="matchup">
                  <li className="team team-top">
                    <BracketInput name="player_3" />
                    <span className="score">64</span>
                  </li>
                  <li className="team team-bottom">
                    <BracketInput name="player_4" />
                    <span className="score">56</span>
                  </li>
                </ul>
                <ul className="matchup">
                  <li className="team team-top">
                    <BracketInput name="player_5" />
                    <span className="score">68</span>
                  </li>
                  <li className="team team-bottom">
                    <BracketInput name="player_6" />
                    <span className="score">54</span>
                  </li>
                </ul>
                <ul className="matchup">
                  <li className="team team-top">
                    <BracketInput name="player_7" />
                    <span className="score">74</span>
                  </li>
                  <li className="team team-bottom">
                    <BracketInput name="player_8" />
                    <span className="score">92</span>
                  </li>
                </ul>
                <ul className="matchup">
                  <li className="team team-top">
                    <BracketInput name="player_9" />
                    <span className="score">78</span>
                  </li>
                  <li className="team team-bottom">
                    <BracketInput name="player_10" />
                    <span className="score">80</span>
                  </li>
                </ul>
                <ul className="matchup">
                  <li className="team team-top">
                    <BracketInput name="player_11" />
                    <span className="score">64</span>
                  </li>
                  <li className="team team-bottom">
                    <BracketInput name="player_12" />
                    <span className="score">63</span>
                  </li>
                </ul>
                <ul className="matchup">
                  <li className="team team-top">
                    <BracketInput name="player_13" />
                    <span className="score">70</span>
                  </li>
                  <li className="team team-bottom">
                    <BracketInput name="player_14" />
                    <span className="score">59</span>
                  </li>
                </ul>
                <ul className="matchup">
                  <li className="team team-top">
                    <BracketInput name="player_15" />
                    <span className="score">64</span>
                  </li>
                  <li className="team team-bottom">
                    <BracketInput name="player_16" />
                    <span className="score">68</span>
                  </li>
                </ul>
              </div>

              <div className="round round-two">
                <div className="round-details">
                  Rodada 2
                  <br />
                </div>
                <ul className="matchup">
                  <li className="team team-top">
                    <BracketInput name="player_33" />
                    <span className="score">&nbsp;</span>
                  </li>
                  <li className="team team-bottom">
                    <BracketInput name="player_34" />
                    <span className="score">&nbsp;</span>
                  </li>
                </ul>
                <ul className="matchup">
                  <li className="team team-top">
                    <BracketInput name="player_35" />
                    <span className="score">&nbsp;</span>
                  </li>
                  <li className="team team-bottom">
                    <BracketInput name="player_36" />
                    <span className="score">&nbsp;</span>
                  </li>
                </ul>
                <ul className="matchup">
                  <li className="team team-top">
                    <BracketInput name="player_37" />
                    <span className="score">&nbsp;</span>
                  </li>
                  <li className="team team-bottom">
                    <BracketInput name="player_38" />
                    <span className="score">&nbsp;</span>
                  </li>
                </ul>
                <ul className="matchup">
                  <li className="team team-top">
                    <BracketInput name="player_39" />
                    <span className="score">&nbsp;</span>
                  </li>
                  <li className="team team-bottom">
                    <BracketInput name="player_40" />
                    <span className="score">&nbsp;</span>
                  </li>
                </ul>
              </div>

              <div className="round round-three">
                <div className="round-details">
                  Rodada 3
                  <br />
                </div>
                <ul className="matchup">
                  <li className="team team-top">
                    <BracketInput name="player_53" />
                    <span className="score">&nbsp;</span>
                  </li>
                  <li className="team team-bottom">
                    <BracketInput name="player_54" />
                    <span className="score">&nbsp;</span>
                  </li>
                </ul>
                <ul className="matchup">
                  <li className="team team-top">
                    <BracketInput name="player_55" />
                    <span className="score">&nbsp;</span>
                  </li>
                  <li className="team team-bottom">
                    <BracketInput name="player_56" />
                    <span className="score">&nbsp;</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="champion">
              <div className="semis-l">
                <div className="round-details">
                  semifinal 1
                  <br />
                </div>
                <ul className="matchup championship">
                  <li className="team team-top">
                    <BracketInput name="player_57" />
                    <span className="vote-count">&nbsp;</span>
                  </li>
                  <li className="team team-bottom">
                    <BracketInput name="player_58" />
                    <span className="vote-count">&nbsp;</span>
                  </li>
                </ul>
              </div>
              <div className="final">
                <div className="round-details">
                  final
                  <br />
                </div>
                <ul className="matchup championship">
                  <li className="team team-top">
                    <BracketInput name="player_61" />
                    <span className="vote-count">&nbsp;</span>
                  </li>
                  <li className="team team-bottom">
                    <BracketInput name="player_62" />
                    <span className="vote-count">&nbsp;</span>
                  </li>
                </ul>
              </div>
              <div className="semis-r">
                <div className="round-details">
                  semifinal 2
                  <br />
                </div>
                <ul className="matchup championship">
                  <li className="team team-top">
                    <BracketInput name="player_59" />
                    <span className="vote-count">&nbsp;</span>
                  </li>
                  <li className="team team-bottom">
                    <BracketInput name="player_60" />
                    <span className="vote-count">&nbsp;</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="split split-two">
              <div className="round round-three">
                <div className="round-details">
                  Rodada 3
                  <br />
                </div>
                <ul className="matchup">
                  <li className="team team-top">
                    <BracketInput name="player_49" />
                    <span className="score">&nbsp;</span>
                  </li>
                  <li className="team team-bottom">
                    <BracketInput name="player_50" />
                    <span className="score">&nbsp;</span>
                  </li>
                </ul>
                <ul className="matchup">
                  <li className="team team-top">
                    <BracketInput name="player_51" />
                    <span className="score">&nbsp;</span>
                  </li>
                  <li className="team team-bottom">
                    <BracketInput name="player_52" />
                    <span className="score">&nbsp;</span>
                  </li>
                </ul>
              </div>

              <div className="round round-two">
                <div className="round-details">
                  Rodada 2
                  <br />
                </div>
                <ul className="matchup">
                  <li className="team team-top">
                    <BracketInput name="player_41" />
                    <span className="score">&nbsp;</span>
                  </li>
                  <li className="team team-bottom">
                    <BracketInput name="player_42" />
                    <span className="score">&nbsp;</span>
                  </li>
                </ul>
                <ul className="matchup">
                  <li className="team team-top">
                    <BracketInput name="player_43" />
                    <span className="score">&nbsp;</span>
                  </li>
                  <li className="team team-bottom">
                    <BracketInput name="player_44" />
                    <span className="score">&nbsp;</span>
                  </li>
                </ul>
                <ul className="matchup">
                  <li className="team team-top">
                    <BracketInput name="player_45" />
                    <span className="score">&nbsp;</span>
                  </li>
                  <li className="team team-bottom">
                    <BracketInput name="player_46" />
                    <span className="score">&nbsp;</span>
                  </li>
                </ul>
                <ul className="matchup">
                  <li className="team team-top">
                    <BracketInput name="player_47" />
                    <span className="score">&nbsp;</span>
                  </li>
                  <li className="team team-bottom">
                    <BracketInput name="player_48" />
                    <span className="score">&nbsp;</span>
                  </li>
                </ul>
              </div>
              <div className="round round-one current">
                <div className="round-details">
                  Rodada 1
                  <br />
                </div>
                <ul className="matchup">
                  <li className="team team-top">
                    <BracketInput name="player_17" />
                    <span className="score">62</span>
                  </li>
                  <li className="team team-bottom">
                    <BracketInput name="player_18" />
                    <span className="score">54</span>
                  </li>
                </ul>
                <ul className="matchup">
                  <li className="team team-top">
                    <BracketInput name="player_19" />
                    <span className="score">68</span>
                  </li>
                  <li className="team team-bottom">
                    <BracketInput name="player_20" />
                    <span className="score">66</span>
                  </li>
                </ul>
                <ul className="matchup">
                  <li className="team team-top">
                    <BracketInput name="player_21" />
                    <span className="score">64</span>
                  </li>
                  <li className="team team-bottom">
                    <BracketInput name="player_22" />
                    <span className="score">56</span>
                  </li>
                </ul>
                <ul className="matchup">
                  <li className="team team-top">
                    <BracketInput name="player_23" />
                    <span className="score">36</span>
                  </li>
                  <li className="team team-bottom">
                    <BracketInput name="player_24" />
                    <span className="score">40</span>
                  </li>
                </ul>
                <ul className="matchup">
                  <li className="team team-top">
                    <BracketInput name="player_25" />
                    <span className="score">38</span>
                  </li>
                  <li className="team team-bottom">
                    <BracketInput name="player_26" />
                    <span className="score">44</span>
                  </li>
                </ul>
                <ul className="matchup">
                  <li className="team team-top">
                    <BracketInput name="player_27" />
                    <span className="score">52</span>
                  </li>
                  <li className="team team-bottom">
                    <BracketInput name="player_28" />
                    <span className="score">80</span>
                  </li>
                </ul>
                <ul className="matchup">
                  <li className="team team-top">
                    <BracketInput name="player_29" />
                    <span className="score">58</span>
                  </li>
                  <li className="team team-bottom">
                    <BracketInput name="player_30" />
                    <span className="score">59</span>
                  </li>
                </ul>
                <ul className="matchup">
                  <li className="team team-top">
                    <BracketInput name="player_31" />
                    <span className="score">74</span>
                  </li>
                  <li className="team team-bottom">
                    <BracketInput name="player_32" />
                    <span className="score">111</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="winner">
          <span id="champion-text">Campeão</span>
          <div className="winner">
            <BracketInput name="player_63" />
          </div>

          <div className="submit">
            <button type="submit">Salvar</button>
          </div>
        </section>
      </Form>
    </>
  );
};

export default BracketItem;
