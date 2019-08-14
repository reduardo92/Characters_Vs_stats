import React, { useReducer, useEffect } from 'react';
import uuid from 'uuid';
import useHeroReducer from './HeroReducer';
import HeroContext from './HerosContext';
import useDataApi from '../../Hooks/useDataApi';

const heroInitalState = {
  heroData: [],
  filterSearch: [],
  vsSelected: [],
  currentPage: 1,
  characterPerPage: 32,
  alerts: []
};

const HeroState = ({ children }) => {
  const [state, dispatch] = useReducer(useHeroReducer, heroInitalState);

  const {
    heroData,
    filterSearch,
    vsSelected,
    currentPage,
    characterPerPage,
    alerts
  } = state;

  const { isLoading, isError, data } = useDataApi(
    `https://akabab.github.io/superhero-api/api/all.json`,
    []
  );

  // Dispatch set heros data
  useEffect(() => dispatch({ type: 'SET_HEROS_DATA', payload: data }), [data]);

  // Set Alerts
  const setAlert = (msg, type, timeout = 3000) => {
    const id = uuid.v4();
    dispatch({
      type: 'SET_ALERT',
      payload: { msg, type, id }
    });

    setTimeout(() => dispatch({ type: 'REMOVE_ALERT', payload: id }), timeout);
  };

  // Add Character to VS Battle
  const addVsBattle = (id, name) => {
    if (vsSelected.length < 2) {
      if (vsSelected.find(matchId => matchId.id === id)) {
        setAlert(`${name} already Added`, 'warning');
        return;
      }
      const selected = heroData.filter(chara => chara.id === id);
      setAlert(`${name} Added`, 'success');
      dispatch({
        type: 'SET_VS_SELECTED',
        payload: selected
      });
    }

    if (vsSelected.length === 2) {
      setAlert(`Battle Full`, 'danger');
    }
  };

  // Remove VS Player
  const removePlayer = id =>
    dispatch({ type: 'REMOVE_VS_SELECTED', payload: id });

  // filter seach name
  const handlefilterSearch = search => {
    if (search === '') {
      dispatch({ type: 'SET_FILTER_SEARCH', payload: [] });
    } else {
      const searchData = heroData.filter(c => {
        const regex = new RegExp(search, 'gi');
        return c.name.match(regex);
      });
      dispatch({ type: 'SET_FILTER_SEARCH', payload: searchData });
      dispatch({ type: 'SET_CURRENT_PAGE', setCurrentPage: 1 });
    }
  };

  // Get current posts
  const indexOfLastPost = currentPage * characterPerPage;
  const indexOfFirstPost = indexOfLastPost - characterPerPage;
  const currentCharacters = (filterSearch.length === 0
    ? heroData
    : filterSearch
  ).slice(indexOfFirstPost, indexOfLastPost);
  // const showData =

  // Change page
  const paginate = pageNumber =>
    dispatch({ type: 'SET_CURRENT_PAGE', setCurrentPage: pageNumber });

  return (
    <HeroContext.Provider
      value={{
        heroData,
        filterSearch,
        vsSelected,
        currentPage,
        characterPerPage,
        dispatch,
        paginate,
        currentCharacters,
        totalCharacter:
          filterSearch.length === 0 ? heroData.length : filterSearch.length,
        isLoading,
        isError,
        handlefilterSearch,
        addVsBattle,
        alerts,
        setAlert,
        removePlayer
      }}
    >
      {children}
    </HeroContext.Provider>
  );
};

export default HeroState;
