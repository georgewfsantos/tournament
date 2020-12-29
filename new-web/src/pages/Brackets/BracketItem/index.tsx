import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import './styles.css';
import { Form } from '@unform/web';
import api from '../../../services/api';
import BracketInput from '../../../components/BracketInput';

interface BracketItemParams {
  categoryId: string;
}

const BracketItem: React.FC = () => {
  const { categoryId } = useParams<BracketItemParams>();

  const [players, setPlayers] = useState([]);

  useEffect(() => {
    async function loadPlayers() {
      const response = await api.get(`/bracket${categoryId}`);

      setPlayers(response.data[0]);

      // refactor how the brackets are created in the api
    }
    loadPlayers();
  }, [categoryId]);

  return (
    <>
      <Form
        onSubmit={() => {
          console.log('hello');
        }}
      >
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
        </section>
      </Form>
    </>
  );
};

export default BracketItem;
