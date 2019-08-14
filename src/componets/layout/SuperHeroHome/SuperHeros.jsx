import React, { useContext } from 'react';
import styled from 'styled-components';
import SearchInput from '../../layout/SerchInput/searchInput';
import Spinner from '../../common/spinner';
import Characters from '../../layout/SuperHeroHome/characters';
import HeroContext from '../../Context/Heros/HerosContext';
import Pagination from '../../common/Pagination/Pagination';
import bgimg from '../../../img/homebg.jpg';
import Alerts from '../Alerts/Alerts';
import PlayersVs from './PlayersVs/PlayersVs';

const Styled = styled.main`
  position: relative;
  justify-content: space-evenly;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
  background: url(${bgimg});
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  padding: 11em 1em 2em;

  .logo {
    width: 300px;
    margin: 0 auto;
    display: block;
  }
`;

const SuperHeros = () => {
  const { heroData } = useContext(HeroContext);

  return (
    <Styled>
      <Alerts />
      <PlayersVs />
      <SearchInput />
      <Pagination />
      {heroData.length === 0 && <Spinner />}
      <Characters />
      <Pagination />
    </Styled>
  );
};

export default SuperHeros;
