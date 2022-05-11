interface MenuAction {
  type: string;
}

interface MenuState {
  flagMenu: boolean;
}

interface IState {
  flagMenu: boolean;
}

const initState: IState = {
  flagMenu: false,
};

export const menuReducer = (
  state = initState,
  action: MenuAction
): MenuState => {
  switch (action.type) {
    case "OPEN_MENU":
      return { ...state, flagMenu: true };
    case "CLOSE_MENU":
      return { ...state, flagMenu: false };
    default:
      return state;
  }
};
