import { createSlice } from "@reduxjs/toolkit";
interface IState {
  flagMenu: boolean;
}

const initialState: IState = {
  flagMenu: false,
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    openMenu(state: IState) {
      state.flagMenu = true;
    },
    closeMenu(state: IState) {
      state.flagMenu = false;
    },
  },
});

export const { openMenu, closeMenu } = menuSlice.actions;
export default menuSlice.reducer;
