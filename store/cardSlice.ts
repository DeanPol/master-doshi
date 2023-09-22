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
    resetCounter: state => {
      state.correctAnswerCounter = 0;
    },
    increment: state => {
      state.correctAnswerCounter += 1;
    },
    updateSelection: state => {
      state.hasSelected = !state.hasSelected;
    },
  },
});

// Action creators are generated for each case reducer function
export const { resetCounter, increment, updateSelection } = cardSlice.actions;

export default cardSlice.reducer;
