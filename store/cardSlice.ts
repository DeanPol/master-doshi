import { createSlice } from '@reduxjs/toolkit';

export interface CounterState {
  correctAnswerCounter: number;
  hasSelected: boolean;
}

const initialState: CounterState = {
  correctAnswerCounter: 0,
  hasSelected: false,
};

export const cardSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.correctAnswerCounter += 1;
    },
    update: state => {
      state.hasSelected = !state.hasSelected;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, update } = cardSlice.actions;

export default cardSlice.reducer;
