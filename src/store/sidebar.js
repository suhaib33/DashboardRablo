import { createSlice } from "@reduxjs/toolkit";
const sidebarSlice = createSlice({
  name: "sidbarState",
  initialState: {
    sidebarIsOpen: false,
  },
  reducers: {
    SidebarOpen(state, action) {
      state.sidebarIsOpen = !state.sidebarIsOpen;
    },
  },
});
export default sidebarSlice.reducer;
export const sidebarAction = sidebarSlice.actions;
