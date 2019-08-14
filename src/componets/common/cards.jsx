import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Styled = styled.div`
  position: relative;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border: 13px solid ${props => props.allies};
  border-radius: 10px;
  background-color: ${props => props.allies};
  transition: 0.3s;
  width: 250px;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  .alligngment {
    position: absolute;
    top: -2px;
    right: -2px;
    background-color: ${props => props.allies};
    border-radius: 0 0 0 5px;
    padding: 8px;
    font-weight: bold;
    z-index: 4;
  }

  .character--img {
    display: ${props => props.showImg};
    border: 3px solid black;
    border-radius: 2px;
    border-bottom: none;
    margin: auto;
  }

  .blur-img {
    background-color: #3e3e3e;
    filter: blur(2px);
    width: 100%;
    height: 330px;
  }

  .character--content {
    color: ${props => props.allies};
    background-color: black;
    border-radius: 0 0 76% 0;
    padding: 10px 10px 10px 7px;
    margin-bottom: 20px;

    h3 {
      font-size: 1.2rem;
      font-weight: 700;
    }
  }

  .character--buttons {
    display: flex;
    justify-content: space-evenly;

    button {
      font-weight: bold;
    }
  }
`;

const Cards = ({ character, addVsBattle }) => {
  const [loading, setLoading] = useState(false);

  return (
    <Styled
      className='character--card'
      allies={character.biography.alignment === 'good' ? '#eff50e' : '#d80000'}
      showImg={loading ? 'block' : 'none'}
    >
      <div className='alligngment'>
        {character.biography.alignment === 'good' ? 'SUPER HERO' : 'VILLAIN'}
      </div>
      {!loading ? <div className='blur-img' /> : null}
      <img
        onLoad={() => setLoading(true)}
        className='character--img'
        src={character.images.md}
        alt={character.name}
      />
      <div className='character--content'>
        <h3>{character.name}</h3>
      </div>
      <div className='character--buttons'>
        <Link
          to={`/character/${character.id}`}
          className='btn btn-sm btn-dark '
        >
          View More
        </Link>
        <button
          onClick={() => addVsBattle(character.id, character.name)}
          className='btn btn-sm btn-outline-dark'
        >
          Add To Battle
        </button>
      </div>
    </Styled>
  );
};

export default Cards;
