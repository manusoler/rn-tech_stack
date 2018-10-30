export const selectLibrary = libId => {
  return {
    type: 'SELECT_LIBRARY',
    payload: libId
  };
};
