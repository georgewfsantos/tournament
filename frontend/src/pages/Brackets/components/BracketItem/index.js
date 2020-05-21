import React from 'react';
import { useParams } from 'react-router-dom';

import Header from '~/components/Header';

import './styles.css';

export default function BracketItem() {
  const { categoryId } = useParams();
  console.tron(categoryId);
  return (
    <>
      <Header />
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
                  Player<span className="score">76</span>
                </li>
                <li className="team team-bottom">
                  Player<span className="score">82</span>
                </li>
              </ul>
              <ul className="matchup">
                <li className="team team-top">
                  Player<span className="score">64</span>
                </li>
                <li className="team team-bottom">
                  Player<span className="score">56</span>
                </li>
              </ul>
              <ul className="matchup">
                <li className="team team-top">
                  Player<span className="score">68</span>
                </li>
                <li className="team team-bottom">
                  Player<span className="score">54</span>
                </li>
              </ul>
              <ul className="matchup">
                <li className="team team-top">
                  Player<span className="score">74</span>
                </li>
                <li className="team team-bottom">
                  Player<span className="score">92</span>
                </li>
              </ul>
              <ul className="matchup">
                <li className="team team-top">
                  Player<span className="score">78</span>
                </li>
                <li className="team team-bottom">
                  Player<span className="score">80</span>
                </li>
              </ul>
              <ul className="matchup">
                <li className="team team-top">
                  Player<span className="score">64</span>
                </li>
                <li className="team team-bottom">
                  Player<span className="score">63</span>
                </li>
              </ul>
              <ul className="matchup">
                <li className="team team-top">
                  Player<span className="score">70</span>
                </li>
                <li className="team team-bottom">
                  Player<span className="score">59</span>
                </li>
              </ul>
              <ul className="matchup">
                <li className="team team-top">
                  Player<span className="score">64</span>
                </li>
                <li className="team team-bottom">
                  Player<span className="score">68</span>
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
                  &nbsp;<span className="score">&nbsp;</span>
                </li>
                <li className="team team-bottom">
                  &nbsp;<span className="score">&nbsp;</span>
                </li>
              </ul>
              <ul className="matchup">
                <li className="team team-top">
                  &nbsp;<span className="score">&nbsp;</span>
                </li>
                <li className="team team-bottom">
                  &nbsp;<span className="score">&nbsp;</span>
                </li>
              </ul>
              <ul className="matchup">
                <li className="team team-top">
                  &nbsp;<span className="score">&nbsp;</span>
                </li>
                <li className="team team-bottom">
                  &nbsp;<span className="score">&nbsp;</span>
                </li>
              </ul>
              <ul className="matchup">
                <li className="team team-top">
                  &nbsp;<span className="score">&nbsp;</span>
                </li>
                <li className="team team-bottom">
                  &nbsp;<span className="score">&nbsp;</span>
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
                  &nbsp;<span className="score">&nbsp;</span>
                </li>
                <li className="team team-bottom">
                  &nbsp;<span className="score">&nbsp;</span>
                </li>
              </ul>
              <ul className="matchup">
                <li className="team team-top">
                  &nbsp;<span className="score">&nbsp;</span>
                </li>
                <li className="team team-bottom">
                  &nbsp;<span className="score">&nbsp;</span>
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
                  &nbsp;<span className="vote-count">&nbsp;</span>
                </li>
                <li className="team team-bottom">
                  &nbsp;<span className="vote-count">&nbsp;</span>
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
                  &nbsp;<span className="vote-count">&nbsp;</span>
                </li>
                <li className="team team-bottom">
                  &nbsp;<span className="vote-count">&nbsp;</span>
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
                  &nbsp;<span className="vote-count">&nbsp;</span>
                </li>
                <li className="team team-bottom">
                  &nbsp;<span className="vote-count">&nbsp;</span>
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
                  &nbsp;<span className="score">&nbsp;</span>
                </li>
                <li className="team team-bottom">
                  &nbsp;<span className="score">&nbsp;</span>
                </li>
              </ul>
              <ul className="matchup">
                <li className="team team-top">
                  &nbsp;<span className="score">&nbsp;</span>
                </li>
                <li className="team team-bottom">
                  &nbsp;<span className="score">&nbsp;</span>
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
                  &nbsp;<span className="score">&nbsp;</span>
                </li>
                <li className="team team-bottom">
                  &nbsp;<span className="score">&nbsp;</span>
                </li>
              </ul>
              <ul className="matchup">
                <li className="team team-top">
                  &nbsp;<span className="score">&nbsp;</span>
                </li>
                <li className="team team-bottom">
                  &nbsp;<span className="score">&nbsp;</span>
                </li>
              </ul>
              <ul className="matchup">
                <li className="team team-top">
                  &nbsp;<span className="score">&nbsp;</span>
                </li>
                <li className="team team-bottom">
                  &nbsp;<span className="score">&nbsp;</span>
                </li>
              </ul>
              <ul className="matchup">
                <li className="team team-top">
                  &nbsp;<span className="score">&nbsp;</span>
                </li>
                <li className="team team-bottom">
                  &nbsp;<span className="score">&nbsp;</span>
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
                  Player<span className="score">62</span>
                </li>
                <li className="team team-bottom">
                  Player<span className="score">54</span>
                </li>
              </ul>
              <ul className="matchup">
                <li className="team team-top">
                  Player<span className="score">68</span>
                </li>
                <li className="team team-bottom">
                  Player<span className="score">66</span>
                </li>
              </ul>
              <ul className="matchup">
                <li className="team team-top">
                  Player<span className="score">64</span>
                </li>
                <li className="team team-bottom">
                  Player<span className="score">56</span>
                </li>
              </ul>
              <ul className="matchup">
                <li className="team team-top">
                  Player<span className="score">36</span>
                </li>
                <li className="team team-bottom">
                  Player<span className="score">40</span>
                </li>
              </ul>
              <ul className="matchup">
                <li className="team team-top">
                  Player<span className="score">38</span>
                </li>
                <li className="team team-bottom">
                  Player<span className="score">44</span>
                </li>
              </ul>
              <ul className="matchup">
                <li className="team team-top">
                  Player<span className="score">52</span>
                </li>
                <li className="team team-bottom">
                  Player<span className="score">80</span>
                </li>
              </ul>
              <ul className="matchup">
                <li className="team team-top">
                  Player<span className="score">58</span>
                </li>
                <li className="team team-bottom">
                  Player<span className="score">59</span>
                </li>
              </ul>
              <ul className="matchup">
                <li className="team team-top">
                  Player<span className="score">74</span>
                </li>
                <li className="team team-bottom">
                  Player<span className="score">111</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
