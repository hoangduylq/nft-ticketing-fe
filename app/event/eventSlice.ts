import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';

interface IEventState {
  isBank?: boolean;
}

const initialState: IEventState = {
  isBank: false,
};

export const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    createEvent: (state, action: PayloadAction<IEventState>) => {
      state.isBank = action.payload.isBank;
    },
  },
});

export const { createEvent } = eventSlice.actions;
export const selectorEvent = (state: RootState) => state.event;
export default eventSlice.reducer;
