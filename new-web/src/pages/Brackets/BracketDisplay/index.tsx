import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import './styles.css';
import api from '../../../services/api';
import BracketInput from '../components/BracketInput';

import { BracketItemParams, BracketFormat } from '../BracketItem';

const BrackeDisplay: React.FC = () => {
  const { categoryId } = useParams<BracketItemParams>();

  const [players, setPlayers] = useState({} as BracketFormat);

  useEffect(() => {
    async function loadPlayers() {
      const response = await api.get(`/brackets/${categoryId}`);

      setPlayers(response.data);
    }
    loadPlayers();
  }, [categoryId]);

  return (
    <>
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
                  {players.player_1}
                  <span className="score">&nbsp;</span>
                </li>
                <li className="team team-bottom">
                  {players.player_2}
                  <span className="score">&nbsp;</span>
                </li>
              </ul>
              <ul className="matchup">
                <li className="team team-top">
                  {players.player_3}
                  <span className="score">&nbsp;</span>
                </li>
                <li className="team team-bottom">
                  {players.player_4}
                  <span className="score">&nbsp;</span>
                </li>
              </ul>
              <ul className="matchup">
                <li className="team team-top">
                  {players.player_5}
                  <span className="score">&nbsp;</span>
                </li>
                <li className="team team-bottom">
                  {players.player_6}
                  <span className="score">&nbsp;</span>
                </li>
              </ul>
              <ul className="matchup">
                <li className="team team-top">
                  {players.player_7}
                  <span className="score">&nbsp;</span>
                </li>
                <li className="team team-bottom">
                  {players.player_8}
                  <span className="score">&nbsp;</span>
                </li>
              </ul>
              <ul className="matchup">
                <li className="team team-top">
                  {players.player_9}
                  <span className="score">&nbsp;</span>
                </li>
                <li className="team team-bottom">
                  {players.player_10}
                  <span className="score">&nbsp;</span>
                </li>
              </ul>
              <ul className="matchup">
                <li className="team team-top">
                  {players.player_11}
                  <span className="score">&nbsp;</span>
                </li>
                <li className="team team-bottom">
                  {players.player_12}
                  <span className="score">&nbsp;</span>
                </li>
              </ul>
              <ul className="matchup">
                <li className="team team-top">
                  {players.player_13}
                  <span className="score">&nbsp;</span>
                </li>
                <li className="team team-bottom">
                  {players.player_14}
                  <span className="score">&nbsp;</span>
                </li>
              </ul>
              <ul className="matchup">
                <li className="team team-top">
                  {players.player_15}
                  <span className="score">&nbsp;</span>
                </li>
                <li className="team team-bottom">
                  {players.player_16}
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
                  {players.player_33}
                  <span className="score">&nbsp;</span>
                </li>
                <li className="team team-bottom">
                  {players.player_34}
                  <span className="score">&nbsp;</span>
                </li>
              </ul>
              <ul className="matchup">
                <li className="team team-top">
                  {players.player_35}
                  <span className="score">&nbsp;</span>
                </li>
                <li className="team team-bottom">
                  {players.player_36}
                  <span className="score">&nbsp;</span>
                </li>
              </ul>
              <ul className="matchup">
                <li className="team team-top">
                  {players.player_37}
                  <span className="score">&nbsp;</span>
                </li>
                <li className="team team-bottom">
                  {players.player_38}
                  <span className="score">&nbsp;</span>
                </li>
              </ul>
              <ul className="matchup">
                <li className="team team-top">
                  {players.player_39}
                  <span className="score">&nbsp;</span>
                </li>
                <li className="team team-bottom">
                  {players.player_40}
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
                  {players.player_49}
                  <span className="score">&nbsp;</span>
                </li>
                <li className="team team-bottom">
                  {players.player_50}
                  <span className="score">&nbsp;</span>
                </li>
              </ul>
              <ul className="matchup">
                <li className="team team-top">
                  {players.player_51}
                  <span className="score">&nbsp;</span>
                </li>
                <li className="team team-bottom">
                  {players.player_52}
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
                  {players.player_57}
                  <span className="vote-count">&nbsp;</span>
                </li>
                <li className="team team-bottom">
                  {players.player_58}
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
                  {players.player_61}
                  <span className="vote-count">&nbsp;</span>
                </li>
                <li className="team team-bottom">
                  {players.player_62}
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
                  {players.player_59}
                  <span className="vote-count">&nbsp;</span>
                </li>
                <li className="team team-bottom">
                  {players.player_60}
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
                  {players.player_53}
                  <span className="score">&nbsp;</span>
                </li>
                <li className="team team-bottom">
                  {players.player_54}
                  <span className="score">&nbsp;</span>
                </li>
              </ul>
              <ul className="matchup">
                <li className="team team-top">
                  {players.player_55}
                  <span className="score">&nbsp;</span>
                </li>
                <li className="team team-bottom">
                  {players.player_56}
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
                  {players.player_41}
                  <span className="score">&nbsp;</span>
                </li>
                <li className="team team-bottom">
                  {players.player_42}
                  <span className="score">&nbsp;</span>
                </li>
              </ul>
              <ul className="matchup">
                <li className="team team-top">
                  {players.player_43}
                  <span className="score">&nbsp;</span>
                </li>
                <li className="team team-bottom">
                  {players.player_44}
                  <span className="score">&nbsp;</span>
                </li>
              </ul>
              <ul className="matchup">
                <li className="team team-top">
                  {players.player_45}
                  <span className="score">&nbsp;</span>
                </li>
                <li className="team team-bottom">
                  {players.player_46}
                  <span className="score">&nbsp;</span>
                </li>
              </ul>
              <ul className="matchup">
                <li className="team team-top">
                  {players.player_47}
                  <span className="score">&nbsp;</span>
                </li>
                <li className="team team-bottom">
                  {players.player_48}
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
                  {players.player_17}
                  <span className="score">&nbsp;</span>
                </li>
                <li className="team team-bottom">
                  {players.player_18}
                  <span className="score">&nbsp;</span>
                </li>
              </ul>
              <ul className="matchup">
                <li className="team team-top">
                  {players.player_19}
                  <span className="score">&nbsp;</span>
                </li>
                <li className="team team-bottom">
                  {players.player_20}
                  <span className="score">&nbsp;</span>
                </li>
              </ul>
              <ul className="matchup">
                <li className="team team-top">
                  {players.player_21}
                  <span className="score">&nbsp;</span>
                </li>
                <li className="team team-bottom">
                  {players.player_22}
                  <span className="score">&nbsp;</span>
                </li>
              </ul>
              <ul className="matchup">
                <li className="team team-top">
                  {players.player_23}
                  <span className="score">&nbsp;</span>
                </li>
                <li className="team team-bottom">
                  {players.player_24}
                  <span className="score">&nbsp;</span>
                </li>
              </ul>
              <ul className="matchup">
                <li className="team team-top">
                  {players.player_25}
                  <span className="score">&nbsp;</span>
                </li>
                <li className="team team-bottom">
                  {players.player_26}
                  <span className="score">&nbsp;</span>
                </li>
              </ul>
              <ul className="matchup">
                <li className="team team-top">
                  {players.player_27}
                  <span className="score">&nbsp;</span>
                </li>
                <li className="team team-bottom">
                  {players.player_28}
                  <span className="score">&nbsp;</span>
                </li>
              </ul>
              <ul className="matchup">
                <li className="team team-top">
                  {players.player_29}
                  <span className="score">&nbsp;</span>
                </li>
                <li className="team team-bottom">
                  {players.player_30}
                  <span className="score">&nbsp;</span>
                </li>
              </ul>
              <ul className="matchup">
                <li className="team team-top">
                  {players.player_31}
                  <span className="score">&nbsp;</span>
                </li>
                <li className="team team-bottom">
                  {players.player_32}
                  <span className="score">&nbsp;</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="winner">
        <span id="champion-text">Campeão</span>
        <div className="winner">
          <p>
            {players.player_63 ? players.player_63 : '_______________________'}
          </p>
        </div>
      </section>
    </>
  );
};

export default BrackeDisplay;
