import React, { useContext } from 'react';
import HeroContext from '../../../Context/Heros/HerosContext';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Styled = styled.div`
  display: ${props => props.showVs};
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 2em;

  .vs--img {
    border-radius: 50%;
    width: 140px;
    height: 140px;
  }
  .vs--name {
    color: #fff;
    font-size: 1.2rem;
    font-weight: 700;
    margin: 0;
  }

  .vs--battle {
    font-size: 4rem;
    font-weight: bold;
    text-decoration: none;
    margin: 0 0.5em;
    animation: zoomout 1.5s ease-in infinite;
    span {
      display: block;
      font-size: 2rem;
    }
  }

  .far {
    background: none;
    color: red;
    border: none;
    font-size: 2rem;
    padding: 0.1em;
    transition: opacity 0.3s ease-in-out;

    &:hover,
    &:focus {
      opacity: 0.7;
    }
  }
`;

const PlayersVs = () => {
  const { vsSelected, removePlayer, setAlert } = useContext(HeroContext);

  return (
    <Styled
      className='vs-container'
      showVs={vsSelected.length !== 0 ? 'flex' : 'none'}
    >
      <div>
        {vsSelected[0] && (
          <div className='player'>
            <img
              className='vs--img'
              src={vsSelected[0].images.sm}
              alt={vsSelected[0].name}
            />
            <p className='vs--name'>{vsSelected[0].name}</p>
            <button
              onClick={() => {
                removePlayer(vsSelected[0].id);
                setAlert(`${vsSelected[0].name} removed`, 'danger');
              }}
              className='far fa-times-circle'
            />
          </div>
        )}
      </div>
      {vsSelected.length === 2 && (
        <>
          <Link className='vs--battle' to='/battle'>
            VS
            <span>Ready</span>
          </Link>
        </>
      )}
      <div>
        {vsSelected[1] && (
          <div className='player'>
            <img
              className='vs--img'
              src={vsSelected[1].images.sm}
              alt={vsSelected[1].name}
            />
            <p className='vs--name'>{vsSelected[1].name}</p>
            <button
              onClick={() => {
                removePlayer(vsSelected[1].id);
                setAlert(`${vsSelected[1].name} removed`, 'danger');
              }}
              className='far fa-times-circle'
            />
          </div>
        )}
      </div>
    </Styled>
  );
};

PlayersVs.propTypes = {};

export default PlayersVs;
