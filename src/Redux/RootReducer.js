const initialState = [];

export const RootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INITIALIZE_DATA":
      return (state = action.payload);
    case "UPDATE_POLICY":
      let newState = [...state];
      for (let i = 0; i < newState.length; i++) {
        if (newState[i].policy_id === action.payload.policy_id) {
          newState[i] = action.payload;
          break;
        }
      }

      return (state = newState);
    default:
      return state;
  }
};
