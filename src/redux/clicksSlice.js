import { useSelector, useDispatch } from 'react-redux';
import { createSlice } from '@reduxjs/toolkit';

// Slice
const clicksSlice = createSlice({
  name: 'clicks',
  initialState: { value: 0 },
  reducers: {
    increment(state, action) {
      state.value += action.payload;
    },
    reset(state) {
      state.value = 0;
    },
  },
});

export const clicksReducer = clicksSlice.reducer;

export const { increment, reset } = clicksSlice.actions;

// Selectors
export const getClicks = state => state.clicks.value;

// Hooks
export const useClicks = () => {
  const dispatch = useDispatch();
  const numberOfClicks = useSelector(getClicks);
  const handleIncrement = value => dispatch(increment(value));
  const handleReset = () => dispatch(reset());

  return {
    numberOfClicks,
    increment: handleIncrement,
    reset: handleReset,
  };
};
