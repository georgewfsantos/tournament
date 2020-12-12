import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import AdminHeader from '~/components/AdminHeader';

import './styles.css';
import api from '~/services/api';

export default function AdminBracketItem() {
  const { categoryId } = useParams();
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    async function loadPlayers() {
      const response = await api.get(`/bracket${categoryId}`);

      setPlayers(response.data[0]);
      console.log(response.data[0]);

      // refactor how the brackets are created in the api
    }
    loadPlayers();
  }, [categoryId]);

  return (
    <>
      <AdminHeader />
      <section id="bracket">
        <div className="container">
          <div className="split split-one">
            <div className="round round-one current">
              <div className="round-details">
                Round 1<br />
                <span className="date">March 16</span>
              </div>
              <ul className="matchup">
                <li className="team team-top">
                  <input
                    type="text"
                    name="player_1"
                    id="player_1"
                    maxLength="18"
                  />
                  <span className="score">76</span>
                </li>
                <li className="team team-bottom">
                  <input
                    type="text"
                    name="player_2"
                    id="player_2"
                    maxLength="18"
                  />
                  <span className="score">82</span>
                </li>
              </ul>
              <ul className="matchup">
                <li className="team team-top">
                  <input
                    type="text"
                    name="player_3"
                    id="player_3"
                    maxLength="18"
                  />
                  <span className="score">64</span>
                </li>
                <li className="team team-bottom">
                  <input
                    type="text"
                    name="player_4"
                    id="player_4"
                    maxLength="18"
                  />
                  <span className="score">56</span>
                </li>
              </ul>
              <ul className="matchup">
                <li className="team team-top">
                  <input
                    type="text"
                    name="player_5"
                    id="player_5"
                    maxLength="18"
                  />
                  <span className="score">68</span>
                </li>
                <li className="team team-bottom">
                  <input
                    type="text"
                    name="player_6"
                    id="player_6"
                    maxLength="18"
                  />
                  <span className="score">54</span>
                </li>
              </ul>
              <ul className="matchup">
                <li className="team team-top">
                  <input
                    type="text"
                    name="player_7"
                    id="player_7"
                    maxLength="18"
                  />
                  <span className="score">74</span>
                </li>
                <li className="team team-bottom">
                  <input
                    type="text"
                    name="player_8"
                    id="player_8"
                    maxLength="18"
                  />
                  <span className="score">92</span>
                </li>
              </ul>
              <ul className="matchup">
                <li className="team team-top">
                  <input
                    type="text"
                    name="player_9"
                    id="player_9"
                    maxLength="18"
                  />
                  <span className="score">78</span>
                </li>
                <li className="team team-bottom">
                  <input
                    type="text"
                    name="player_10"
                    id="player_10"
                    maxLength="18"
                  />
                  <span className="score">80</span>
                </li>
              </ul>
              <ul className="matchup">
                <li className="team team-top">
                  <input
                    type="text"
                    name="player_11"
                    id="player_11"
                    maxLength="18"
                  />
                  <span className="score">64</span>
                </li>
                <li className="team team-bottom">
                  <input
                    type="text"
                    name="player_12"
                    id="player_12"
                    maxLength="18"
                  />
                  <span className="score">63</span>
                </li>
              </ul>
              <ul className="matchup">
                <li className="team team-top">
                  <input
                    type="text"
                    name="player_13"
                    id="player_13"
                    maxLength="18"
                  />
                  <span className="score">70</span>
                </li>
                <li className="team team-bottom">
                  <input
                    type="text"
                    name="player_14"
                    id="player_14"
                    maxLength="18"
                  />
                  <span className="score">59</span>
                </li>
              </ul>
              <ul className="matchup">
                <li className="team team-top">
                  <input
                    type="text"
                    name="player_15"
                    id="player_15"
                    maxLength="18"
                  />
                  <span className="score">64</span>
                </li>

                <li className="team team-bottom">
                  <input
                    type="text"
                    name="player_16"
                    id="player_16"
                    maxLength="18"
                  />
                  <span className="score">68</span>
                </li>
              </ul>
            </div>

            <div className="round round-two">
              <div className="round-details">
                Round 2<br />
                <span className="date">March 18</span>
              </div>
              <ul className="matchup">
                <li className="team team-top">
                  <input
                    type="text"
                    name="player_"
                    id="player_"
                    maxLength="18"
                  />
                  <span className="score">&nbsp;</span>
                </li>
                <li className="team team-bottom">
                  <input
                    type="text"
                    name="player_"
                    id="player_"
                    maxLength="18"
                  />
                  <span className="score">&nbsp;</span>
                </li>
              </ul>
              <ul className="matchup">
                <li className="team team-top">
                  <input
                    type="text"
                    name="player_"
                    id="player_"
                    maxLength="18"
                  />
                  <span className="score">&nbsp;</span>
                </li>
                <li className="team team-bottom">
                  <input
                    type="text"
                    name="player_"
                    id="player_"
                    maxLength="18"
                  />
                  <span className="score">&nbsp;</span>
                </li>
              </ul>
              <ul className="matchup">
                <li className="team team-top">
                  <input
                    type="text"
                    name="player_"
                    id="player_"
                    maxLength="18"
                  />
                  <span className="score">&nbsp;</span>
                </li>
                <li className="team team-bottom">
                  <input
                    type="text"
                    name="player_"
                    id="player_"
                    maxLength="18"
                  />
                  <span className="score">&nbsp;</span>
                </li>
              </ul>
              <ul className="matchup">
                <li className="team team-top">
                  <input
                    type="text"
                    name="player_"
                    id="player_"
                    maxLength="18"
                  />
                  <span className="score">&nbsp;</span>
                </li>
                <li className="team team-bottom">
                  <input
                    type="text"
                    name="player_"
                    id="player_"
                    maxLength="18"
                  />
                  <span className="score">&nbsp;</span>
                </li>
              </ul>
            </div>

            <div className="round round-three">
              <div className="round-details">
                Round 3<br />
                <span className="date">March 22</span>
              </div>
              <ul className="matchup">
                <li className="team team-top">
                  <input
                    type="text"
                    name="player_"
                    id="player_"
                    maxLength="18"
                  />
                  <span className="score">&nbsp;</span>
                </li>
                <li className="team team-bottom">
                  <input
                    type="text"
                    name="player_"
                    id="player_"
                    maxLength="18"
                  />
                  <span className="score">&nbsp;</span>
                </li>
              </ul>
              <ul className="matchup">
                <li className="team team-top">
                  <input
                    type="text"
                    name="player_"
                    id="player_"
                    maxLength="18"
                  />
                  <span className="score">&nbsp;</span>
                </li>
                <li className="team team-bottom">
                  <input
                    type="text"
                    name="player_"
                    id="player_"
                    maxLength="18"
                  />
                  <span className="score">&nbsp;</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="champion">
            <div className="semis-l">
              <div className="round-details">
                semifinal 1<br />
                <span className="date">March 26-28</span>
              </div>
              <ul className="matchup championship">
                <li className="team team-top">
                  <input
                    type="text"
                    name="player_"
                    id="player_"
                    maxLength="18"
                  />
                  <span className="vote-count">&nbsp;</span>
                </li>
                <li className="team team-bottom">
                  <input
                    type="text"
                    name="player_"
                    id="player_"
                    maxLength="18"
                  />
                  <span className="vote-count">&nbsp;</span>
                </li>
              </ul>
            </div>
            <div className="final">
              <div className="round-details">
                final <br />
                <span className="date">March 30 - Apr. 1</span>
              </div>
              <ul className="matchup championship">
                <li className="team team-top">
                  <input
                    type="text"
                    name="player_"
                    id="player_"
                    maxLength="18"
                  />
                  <span className="vote-count">&nbsp;</span>
                </li>
                <li className="team team-bottom">
                  <input
                    type="text"
                    name="player_"
                    id="player_"
                    maxLength="18"
                  />
                  <span className="vote-count">&nbsp;</span>
                </li>
              </ul>
            </div>
            <div className="semis-r">
              <div className="round-details">
                semifinal
                <br />
                <span className="date">March 26-28</span>
              </div>
              <ul className="matchup championship">
                <li className="team team-top">
                  <input
                    type="text"
                    name="player_"
                    id="player_"
                    maxLength="18"
                  />
                  <span className="vote-count">&nbsp;</span>
                </li>
                <li className="team team-bottom">
                  <input
                    type="text"
                    name="player_"
                    id="player_"
                    maxLength="18"
                  />
                  <span className="vote-count">&nbsp;</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="split split-two">
            <div className="round round-three">
              <div className="round-details">
                Round 3<br />
                <span className="date">March 22</span>
              </div>
              <ul className="matchup">
                <li className="team team-top">
                  <input
                    type="text"
                    name="player_"
                    id="player_"
                    maxLength="18"
                  />
                  <span className="score">&nbsp;</span>
                </li>
                <li className="team team-bottom">
                  <input
                    type="text"
                    name="player_"
                    id="player_"
                    maxLength="18"
                  />
                  <span className="score">&nbsp;</span>
                </li>
              </ul>
              <ul className="matchup">
                <li className="team team-top">
                  <input
                    type="text"
                    name="player_"
                    id="player_"
                    maxLength="18"
                  />
                  <span className="score">&nbsp;</span>
                </li>
                <li className="team team-bottom">
                  <input
                    type="text"
                    name="player_"
                    id="player_"
                    maxLength="18"
                  />
                  <span className="score">&nbsp;</span>
                </li>
              </ul>
            </div>

            <div className="round round-two">
              <div className="round-details">
                Round 2<br />
                <span className="date">March 18</span>
              </div>
              <ul className="matchup">
                <li className="team team-top">
                  <input
                    type="text"
                    name="player_"
                    id="player_"
                    maxLength="18"
                  />
                  <span className="score">&nbsp;</span>
                </li>
                <li className="team team-bottom">
                  <input
                    type="text"
                    name="player_"
                    id="player_"
                    maxLength="18"
                  />
                  <span className="score">&nbsp;</span>
                </li>
              </ul>
              <ul className="matchup">
                <li className="team team-top">
                  <input
                    type="text"
                    name="player_"
                    id="player_"
                    maxLength="18"
                  />
                  <span className="score">&nbsp;</span>
                </li>
                <li className="team team-bottom">
                  <input
                    type="text"
                    name="player_"
                    id="player_"
                    maxLength="18"
                  />
                  <span className="score">&nbsp;</span>
                </li>
              </ul>
              <ul className="matchup">
                <li className="team team-top">
                  <input
                    type="text"
                    name="player_"
                    id="player_"
                    maxLength="18"
                  />
                  <span className="score">&nbsp;</span>
                </li>
                <li className="team team-bottom">
                  <input
                    type="text"
                    name="player_"
                    id="player_"
                    maxLength="18"
                  />
                  <span className="score">&nbsp;</span>
                </li>
              </ul>
              <ul className="matchup">
                <li className="team team-top">
                  <input
                    type="text"
                    name="player_"
                    id="player_"
                    maxLength="18"
                  />
                  <span className="score">&nbsp;</span>
                </li>
                <li className="team team-bottom">
                  <input
                    type="text"
                    name="player_"
                    id="player_"
                    maxLength="18"
                  />
                  <span className="score">&nbsp;</span>
                </li>
              </ul>
            </div>
            <div className="round round-one current">
              <div className="round-details">
                Round 1<br />
                <span className="date">March 16</span>
              </div>
              <ul className="matchup">
                <li className="team team-top">
                  <input
                    type="text"
                    name="player_17"
                    id="player_17"
                    maxLength="18"
                  />
                  <span className="score">62</span>
                </li>
                <li className="team team-bottom">
                  <input
                    type="text"
                    name="player_18"
                    id="player_18"
                    maxLength="18"
                  />
                  <span className="score">54</span>
                </li>
              </ul>
              <ul className="matchup">
                <li className="team team-top">
                  <input
                    type="text"
                    name="player_19"
                    id="player_19"
                    maxLength="18"
                  />
                  <span className="score">68</span>
                </li>
                <li className="team team-bottom">
                  <input
                    type="text"
                    name="player_20"
                    id="player_20"
                    maxLength="18"
                  />
                  <span className="score">66</span>
                </li>
              </ul>
              <ul className="matchup">
                <li className="team team-top">
                  <input
                    type="text"
                    name="player_21"
                    id="player_21"
                    maxLength="18"
                  />
                  <span className="score">64</span>
                </li>
                <li className="team team-bottom">
                  <input
                    type="text"
                    name="player_22"
                    id="player_22"
                    maxLength="18"
                  />
                  <span className="score">56</span>
                </li>
              </ul>
              <ul className="matchup">
                <li className="team team-top">
                  <input
                    type="text"
                    name="player_23"
                    id="player_23"
                    maxLength="18"
                  />
                  <span className="score">36</span>
                </li>
                <li className="team team-bottom">
                  <input
                    type="text"
                    name="player_24"
                    id="player_24"
                    maxLength="18"
                  />
                  <span className="score">40</span>
                </li>
              </ul>
              <ul className="matchup">
                <li className="team team-top">
                  <input
                    type="text"
                    name="player_25"
                    id="player_25"
                    maxLength="18"
                  />
                  <span className="score">38</span>
                </li>
                <li className="team team-bottom">
                  <input
                    type="text"
                    name="player_26"
                    id="player_26"
                    maxLength="18"
                  />
                  <span className="score">44</span>
                </li>
              </ul>
              <ul className="matchup">
                <li className="team team-top">
                  <input
                    type="text"
                    name="player_27"
                    id="player_27"
                    maxLength="18"
                  />
                  <span className="score">52</span>
                </li>
                <li className="team team-bottom">
                  <input
                    type="text"
                    name="player_28"
                    id="player_28"
                    maxLength="18"
                  />
                  <span className="score">80</span>
                </li>
              </ul>
              <ul className="matchup">
                <li className="team team-top">
                  <input
                    type="text"
                    name="player_29"
                    id="player_29"
                    maxLength="18"
                  />
                  <span className="score">58</span>
                </li>
                <li className="team team-bottom">
                  <input
                    type="text"
                    name="player_30"
                    id="player_30"
                    maxLength="18"
                  />
                  <span className="score">59</span>
                </li>
              </ul>
              <ul className="matchup">
                <li className="team team-top">
                  <input
                    type="text"
                    name="player_31"
                    id="player_31"
                    maxLength="18"
                  />
                  <span className="score">74</span>
                </li>
                <li className="team team-bottom">
                  <input
                    type="text"
                    name="player_32"
                    id="player_32"
                    maxLength="18"
                  />
                  <span className="score">111</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
