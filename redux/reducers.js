const initialState = {
  loading: true,
};

export default function reducers(state = initialState, action) {
  switch (action.type) {
    case "SET_LOADING": {
      return {
        ...state,
        loading: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}
