const reducer = (state, action) => {
  const x = state.position[0];
  const y = state.position[1];
  // logic adjusted for grid layout
  switch (action.type) {
    case "UP":
      return {
        position: [x + 1, y],
      };
    case "DOWN":
      return {
        position: [x - 1, y],
      };
    case "LEFT":
      return {
        position: [x, y - 1],
      };
    case "RIGHT":
      return {
        position: [x, y + 1],
      };
    default:
      return state;
  }
};

export default reducer;
