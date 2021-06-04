const reducer = (state, action) => {
  let x = state.position[0];
  let y = state.position[1];
  switch (action.type) {
    case "UP":
      if (y >= 10) {
        console.log("Roomba hit a wall");
        y = 9;
      }
      return {
        ...state,
        position: [x, y + 1],
      };
    case "DOWN":
      if (y <= 1) {
        console.log("Roomba hit a wall");
        y = 2;
      }
      return {
        ...state,
        position: [x, y - 1],
      };
    case "LEFT":
      if (x <= 1) {
        console.log("Roomba hit a wall");
        x = 2;
      }
      return {
        ...state,
        position: [x - 1, y],
      };
    case "RIGHT":
      if (x >= 10) {
        console.log("Roomba hit a wall");
        x = 9;
      }
      return {
        ...state,
        position: [x + 1, y],
      };
    default:
      return state;
  }
};

export default reducer;
