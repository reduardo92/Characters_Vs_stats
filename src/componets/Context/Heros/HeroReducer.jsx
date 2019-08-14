const useHeroReducer = (state, action) => {
  switch (action.type) {
    case 'SET_HEROS_DATA':
      return {
        ...state,
        heroData: action.payload
      };
    case 'SET_FILTER_SEARCH':
      return {
        ...state,
        filterSearch: action.payload
      };
    case 'SET_VS_SELECTED':
      return {
        ...state,
        vsSelected: [...state.vsSelected, ...action.payload]
      };
    case 'CLEAR_VS_SELECTED':
      return {
        ...state,
        vsSelected: []
      };
    case 'REMOVE_VS_SELECTED':
      return {
        ...state,
        vsSelected: state.vsSelected.filter(
          player => player.id !== action.payload
        )
      };
    case 'SET_CURRENT_PAGE':
      return {
        ...state,
        currentPage: action.setCurrentPage
      };
    case 'SET_ALERT':
      return {
        ...state,
        alerts: [...state.alerts, action.payload]
      };
    case 'REMOVE_ALERT':
      return {
        ...state,
        alerts: state.alerts.filter(alert => alert.id !== action.payload)
      };
    case 'SET_FULL':
      return {
        ...state,
        full: action.payload
      };
    default:
      return state;
  }
};

export default useHeroReducer;
