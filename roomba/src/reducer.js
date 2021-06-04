const reducer = (state, action) => {
  let x = state.position[0];
  let y = state.position[1];
  const message = "Roomba hit a wall";

  switch (action.type) {
    case "UP":
      if (y >= 10) {
        console.log(message);
        y = 9;
        return {
          ...state,
          hits: state.hits + 1,
        };
      }
      return {
        ...state,
        position: [x, y + 1],
        history: [...state.history, state.position],
      };
    case "DOWN":
      if (y <= 1) {
        console.log(message);
        y = 2;
        return {
          ...state,
          hits: state.hits + 1,
        };
      }
      return {
        ...state,
        position: [x, y - 1],
        history: [...state.history, state.position],
      };
    case "LEFT":
      if (x <= 1) {
        console.log(message);
        x = 2;
        return {
          ...state,
          hits: state.hits + 1,
        };
      }
      return {
        ...state,
        position: [x - 1, y],
        history: [...state.history, state.position],
      };
    case "RIGHT":
      if (x >= 10) {
        console.log(message);
        x = 9;
        return {
          ...state,
          hits: state.hits + 1,
        };
      }
      return {
        ...state,
        position: [x + 1, y],
        history: [...state.history, state.position],
      };
    default:
      return state;
  }
};

export default reducer;
