import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import './styles.css';
import { Form } from '@unform/web';
import api from '../../../services/api';
import BracketInput from '../components/BracketInput';

interface BracketItemParams {
  categoryId: string;
}

const BrackeDisplay: React.FC = () => {
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
                    Player
                    <span className="score">76</span>
                  </li>
                  <li className="team team-bottom">
                    Player
                    <span className="score">82</span>
                  </li>
                </ul>
                <ul className="matchup">
                  <li className="team team-top">
                    Player
                    <span className="score">64</span>
                  </li>
                  <li className="team team-bottom">
                    Player
                    <span className="score">56</span>
                  </li>
                </ul>
                <ul className="matchup">
                  <li className="team team-top">
                    Player
                    <span className="score">68</span>
                  </li>
                  <li className="team team-bottom">
                    Player
                    <span className="score">54</span>
                  </li>
                </ul>
                <ul className="matchup">
                  <li className="team team-top">
                    Player
                    <span className="score">74</span>
                  </li>
                  <li className="team team-bottom">
                    Player
                    <span className="score">92</span>
                  </li>
                </ul>
                <ul className="matchup">
                  <li className="team team-top">
                    Player
                    <span className="score">78</span>
                  </li>
                  <li className="team team-bottom">
                    Player
                    <span className="score">80</span>
                  </li>
                </ul>
                <ul className="matchup">
                  <li className="team team-top">
                    Player
                    <span className="score">64</span>
                  </li>
                  <li className="team team-bottom">
                    Player
                    <span className="score">63</span>
                  </li>
                </ul>
                <ul className="matchup">
                  <li className="team team-top">
                    Player
                    <span className="score">70</span>
                  </li>
                  <li className="team team-bottom">
                    Player
                    <span className="score">59</span>
                  </li>
                </ul>
                <ul className="matchup">
                  <li className="team team-top">
                    Player
                    <span className="score">64</span>
                  </li>
                  <li className="team team-bottom">
                    Player
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
                    Player
                    <span className="score">&nbsp;</span>
                  </li>
                  <li className="team team-bottom">
                    Player
                    <span className="score">&nbsp;</span>
                  </li>
                </ul>
                <ul className="matchup">
                  <li className="team team-top">
                    Player
                    <span className="score">&nbsp;</span>
                  </li>
                  <li className="team team-bottom">
                    Player
                    <span className="score">&nbsp;</span>
                  </li>
                </ul>
                <ul className="matchup">
                  <li className="team team-top">
                    Player
                    <span className="score">&nbsp;</span>
                  </li>
                  <li className="team team-bottom">
                    Player
                    <span className="score">&nbsp;</span>
                  </li>
                </ul>
                <ul className="matchup">
                  <li className="team team-top">
                    Player
                    <span className="score">&nbsp;</span>
                  </li>
                  <li className="team team-bottom">
                    Player
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
                    Player
                    <span className="score">&nbsp;</span>
                  </li>
                  <li className="team team-bottom">
                    Player
                    <span className="score">&nbsp;</span>
                  </li>
                </ul>
                <ul className="matchup">
                  <li className="team team-top">
                    Player
                    <span className="score">&nbsp;</span>
                  </li>
                  <li className="team team-bottom">
                    Player
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
                    Player
                    <span className="vote-count">&nbsp;</span>
                  </li>
                  <li className="team team-bottom">
                    Player
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
                    Player
                    <span className="vote-count">&nbsp;</span>
                  </li>
                  <li className="team team-bottom">
                    Player
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
                    Player
                    <span className="vote-count">&nbsp;</span>
                  </li>
                  <li className="team team-bottom">
                    Player
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
                    Player
                    <span className="score">&nbsp;</span>
                  </li>
                  <li className="team team-bottom">
                    Player
                    <span className="score">&nbsp;</span>
                  </li>
                </ul>
                <ul className="matchup">
                  <li className="team team-top">
                    Player
                    <span className="score">&nbsp;</span>
                  </li>
                  <li className="team team-bottom">
                    Player
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
                    Player
                    <span className="score">&nbsp;</span>
                  </li>
                  <li className="team team-bottom">
                    Player
                    <span className="score">&nbsp;</span>
                  </li>
                </ul>
                <ul className="matchup">
                  <li className="team team-top">
                    Player
                    <span className="score">&nbsp;</span>
                  </li>
                  <li className="team team-bottom">
                    Player
                    <span className="score">&nbsp;</span>
                  </li>
                </ul>
                <ul className="matchup">
                  <li className="team team-top">
                    Player
                    <span className="score">&nbsp;</span>
                  </li>
                  <li className="team team-bottom">
                    Player
                    <span className="score">&nbsp;</span>
                  </li>
                </ul>
                <ul className="matchup">
                  <li className="team team-top">
                    Player
                    <span className="score">&nbsp;</span>
                  </li>
                  <li className="team team-bottom">
                    Player
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
                    Player
                    <span className="score">62</span>
                  </li>
                  <li className="team team-bottom">
                    Player
                    <span className="score">54</span>
                  </li>
                </ul>
                <ul className="matchup">
                  <li className="team team-top">
                    Player
                    <span className="score">68</span>
                  </li>
                  <li className="team team-bottom">
                    Player
                    <span className="score">66</span>
                  </li>
                </ul>
                <ul className="matchup">
                  <li className="team team-top">
                    Player
                    <span className="score">64</span>
                  </li>
                  <li className="team team-bottom">
                    Player
                    <span className="score">56</span>
                  </li>
                </ul>
                <ul className="matchup">
                  <li className="team team-top">
                    Player
                    <span className="score">36</span>
                  </li>
                  <li className="team team-bottom">
                    Player
                    <span className="score">40</span>
                  </li>
                </ul>
                <ul className="matchup">
                  <li className="team team-top">
                    Player
                    <span className="score">38</span>
                  </li>
                  <li className="team team-bottom">
                    Player
                    <span className="score">44</span>
                  </li>
                </ul>
                <ul className="matchup">
                  <li className="team team-top">
                    Player
                    <span className="score">52</span>
                  </li>
                  <li className="team team-bottom">
                    Player
                    <span className="score">80</span>
                  </li>
                </ul>
                <ul className="matchup">
                  <li className="team team-top">
                    Player
                    <span className="score">58</span>
                  </li>
                  <li className="team team-bottom">
                    Player
                    <span className="score">59</span>
                  </li>
                </ul>
                <ul className="matchup">
                  <li className="team team-top">
                    Player
                    <span className="score">74</span>
                  </li>
                  <li className="team team-bottom">
                    Player
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

export default BrackeDisplay;
