const initState = null;

const selectionReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SELECT_LIBRARY':
      return action.payload;
    default:
      return state;
  }
};

export default selectionReducer;
