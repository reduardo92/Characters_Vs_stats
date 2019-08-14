import React, { useContext, useState, useRef, useEffect } from 'react';
import HeroContext from '../../Context/Heros/HerosContext';
import styled from 'styled-components';
import vsimg from '../../../img/vs2.png';
import PlayerCard from './PlayerCard/PlayerCard';
import battleBg from '../../../img/battlebg.jpg';

const Styled = styled.main`
  position: relative;
  min-height: 100vh;
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  background: url(${battleBg});
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  padding: 8em 1em 1.5em;
  /*Flex  */
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;

  .vs--fight {
    .vs--winner,
    .vs--start {
      text-transform: uppercase;
      text-align: center;
      font-size: 2.8rem;
      font-weight: bold;
      color: #e0dfdc;
      letter-spacing: 0.1em;
      text-shadow: 0 -1px 0 #fff, 0 1px 0 #2e2e2e, 0 2px 0 #2c2c2c,
        0 3px 0 #2a2a2a, 0 4px 0 #282828, 0 5px 0 #262626, 0 6px 0 #242424,
        0 7px 0 #222, 0 8px 0 #202020, 0 9px 0 #1e1e1e, 0 10px 0 #1c1c1c,
        0 11px 0 #1a1a1a, 0 12px 0 #181818, 0 13px 0 #161616, 0 14px 0 #141414,
        0 15px 0 #121212, 0 22px 30px rgba(0, 0, 0, 0.9);
    }

    .vs--winner {
      font-size: 1.3rem;
      span {
        color: #00bf00;
        display: block;
      }
    }

    .vs--start {
      display: block;
      margin: 0 auto;
      animation: ${props => props.zoom} 1.5s ease-in infinite;
      font-size: 2rem;

      &:hover,
      &:focus {
        box-shadow: none;
        color: red;
      }
    }
  }

  .vs {
    display: flex;
    flex-direction: column;

    .vsimg {
      width: 75px;
      margin: 0 auto;
    }
  }
  @media screen and (min-width: 760px) {
    flex-direction: row;

    .vs--fight {
      .vs--winner {
        font-size: 2rem;
      }

      .vs--start {
        font-size: 2.5rem;
      }
    }

    .vs {
      .vsimg {
        width: 140px;
      }
    }
  }

  @media screen and (min-width: 1140px) {
    .vs--fight {
      .vs--winner {
        font-size: 2.5rem;
      }

      .vs--start {
        font-size: 2.8rem;
      }
    }

    .vs {
      .vsimg {
        width: 200px;
      }
    }
  }
`;

const Battle = props => {
  // Battle State
  const [winner, setWinner] = useState('');
  const [done, setDone] = useState(false);
  const [ready, setReady] = useState(false);
  const [full, setFull] = useState(false);
  const [disable, setDisable] = useState(false);
  const [playerOne, setPlayerOne] = useState({});
  const [playerTwo, setPlayerTwo] = useState({});
  const [count, setCount] = useState(0);

  // ref
  const player1 = useRef();
  const player2 = useRef();

  // Context
  const { vsSelected, dispatch, removePlayer } = useContext(HeroContext);

  // vs selected length
  const vsLength = vsSelected.length;

  const set = () => {
    if (!full) {
      if (vsSelected.length >= 1) {
        setPlayerOne(vsSelected[0].powerstats);
      }
      if (vsSelected.length === 2) {
        setPlayerTwo(vsSelected[1].powerstats);
        setFull(true);
      }
    } else {
      setFull(false);
    }
  };

  // Set Character data when both are full or one is Add
  useEffect(() => set(), []);

  // run stats numbers
  useEffect(() => {
    const interval = setInterval(() => logNumber(interval), 20);

    return () => clearInterval(interval);
  }, [count]);

  // run stats
  const faceStats = () => {
    let points = { one: 0, two: 0 };

    // run compare stats
    if (!done) {
      compareStats(playerOne.combat, playerTwo.combat, points);
      compareStats(playerOne.power, playerTwo.power, points);
      compareStats(playerOne.strength, playerTwo.strength, points);
      compareStats(playerOne.speed, playerTwo.speed, points);
      compareStats(playerOne.durability, playerTwo.durability, points);
      compareStats(playerOne.intelligence, playerTwo.intelligence, points);

      if (points.one > points.two) {
        setWinner(`${vsSelected[0].name}`);
      } else if (points.one < points.two) {
        setWinner(`${vsSelected[1].name}`);
      } else if (points.one === points.two) {
        setWinner('DRAW !');
      }

      setDone(true);
      setReady(true);
      setCount(count => count + 1);
      points = { one: 0, two: 0 };
    }
  };

  // Compare if else who's stats are higher
  const compareStats = (player1, player2, points) => {
    if (player1 > player2) {
      points.one++;
    } else if (player1 < player2) {
      points.two++;
    } else if (player1 === player2) {
    }
  };

  // reset
  const reset = () => {
    setDone(false);
    setDisable(false);
    setReady(false);
    dispatch({ type: 'CLEAR_VS_SELECTED' });
  };

  // Subtract abulitys #'s
  const abilityStats = (stat, num) => {
    const one = parseInt(player1.current.children[num].lastChild.innerHTML);
    const two = parseInt(player2.current.children[num].lastChild.innerHTML);
    const oneCl = player1.current.children[num].lastChild.classList;
    const twoCl = player2.current.children[num].lastChild.classList;

    // if (!doneNum) return;
    if (one === 0 || two === 0) {
      if (one === 0 && two === 0) {
        twoCl.add('tie');
        oneCl.add('tie');
      }

      if (one === 0) {
        oneCl.add('lose');
        twoCl.add('won');
      } else if (two === 0) {
        twoCl.add('lose');
        oneCl.add('won');
      }

      setCount(count => count + 1);
    } else {
      setPlayerOne(playerOne => ({
        ...playerOne,
        [stat]: playerOne[stat] - 1
      }));
      setPlayerTwo(playerTwo => ({
        ...playerTwo,
        [stat]: playerTwo[stat] - 1
      }));
    }
  };

  // run swicth for stats in order by changing Count state
  const logNumber = clear => {
    switch (count) {
      case 1:
        abilityStats('combat', 0);
        break;
      case 2:
        abilityStats('power', 1);
        break;
      case 3:
        abilityStats('strength', 2);
        break;
      case 4:
        abilityStats('speed', 3);
        break;
      case 5:
        abilityStats('durability', 4);
        break;
      case 6:
        abilityStats('intelligence', 5);
        break;
      case 7:
        faceStats();
        break;
      case 8:
        clearInterval(clear);
        console.log(playerOne, playerTwo);
        break;
      default:
        return null;
    }
  };

  return (
    <Styled zoom={vsLength === 2 && 'zoomout'}>
      <div className='player1'>
        {vsSelected[0] && Object.keys(playerOne).length !== 0 && (
          <PlayerCard
            player={vsSelected[0]}
            stats={playerOne}
            bgColor={'#d4252f'}
            removePlayer={removePlayer}
            setDone={setDone}
            ref={player1}
          />
        )}
      </div>
      <div className='vs--fight'>
        <div className='vs'>
          {done && (
            <h2 className='vs--winner'>
              {winner} {winner !== 'DRAW !' && <span>Won !</span>}
            </h2>
          )}
          <img className='vsimg' src={vsimg} alt='vs img' />
          {!ready && vsLength === 2 && (
            <button
              disabled={disable}
              onClick={() => {
                setCount(1);
                setDisable(true);
              }}
              className='btn vs--start'
            >
              {count > 0 ? 'Running' : 'START'}
            </button>
          )}
          {ready && (
            <button onClick={reset} className='btn vs--start'>
              RESET
            </button>
          )}
        </div>
      </div>
      <div className='player2'>
        {vsSelected[1] && Object.keys(playerTwo).length !== 0 && (
          <PlayerCard
            player={vsSelected[1]}
            stats={playerTwo}
            bgColor={'#0068da'}
            removePlayer={removePlayer}
            setDone={setDone}
            ref={player2}
          />
        )}
      </div>
    </Styled>
  );
};

export default Battle;
