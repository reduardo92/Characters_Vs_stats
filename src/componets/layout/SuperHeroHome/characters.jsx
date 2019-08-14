import React, { useContext } from 'react';
import Cards from '../.././common/cards';
import styled from 'styled-components';
import HeroContext from '../../Context/Heros/HerosContext';

const Styled = styled.div`
  display: grid;
  grid-gap: 2em;
  max-width: 1200px;
  margin: 3em auto;
  justify-content: center;
  justify-items: center;

  @media screen and (min-width: 760px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
`;

const Characters = () => {
  const { currentCharacters, addVsBattle } = useContext(HeroContext);
  return (
    <Styled>
      {currentCharacters.map(character => (
        <Cards
          key={character.id}
          character={character}
          addVsBattle={addVsBattle}
        />
      ))}
    </Styled>
  );
};

export default Characters;
