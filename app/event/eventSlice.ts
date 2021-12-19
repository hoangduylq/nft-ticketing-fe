import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';

interface IEventState {
  id?: string;
}

const initialState: IEventState = {
  id: '',
};

export const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    createEvent: (state, action: PayloadAction<IEventState | undefined>) => {
      state.id = action.payload?.id;
    },
  },
});

export const { createEvent } = eventSlice.actions;
export const selectorEvent = (state: RootState) => state.event;
export default eventSlice.reducer;
