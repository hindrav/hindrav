import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TabContentState {
  isTabRendered: boolean;
}

const initialState: TabContentState = {
  isTabRendered: false,
};

const tabContentSlice = createSlice({
  name: "tabContent",
  initialState,
  reducers: {
    setTabRendered: (state, action: PayloadAction<boolean>) => {
      state.isTabRendered = action.payload;
    }
  }
});

export const { setTabRendered } = tabContentSlice.actions;

export default tabContentSlice.reducer;
