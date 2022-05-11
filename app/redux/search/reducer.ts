interface SearchAction {
  type: string;
  payload: string;
}

interface SearchState {
  flagSearch: boolean;
}

interface IState {
  flagSearch: boolean;
}

const initState: IState = {
  flagSearch: false,
};

export const searchReducer = (
  state = initState,
  action: SearchAction
): SearchState => {
  switch (action.type) {
    case "OPEN_SEARCH":
      return { ...state, flagSearch: true };
    case "CLOSE_SEARCH":
      return { ...state, flagSearch: false };
    default:
      return state;
  }
};
