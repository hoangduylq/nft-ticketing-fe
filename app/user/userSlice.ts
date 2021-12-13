import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';

export interface IUserState {
  email: string | null;
  name?: string | null;
  role?: string | null;
  gender?: string | null;
  avatar?: string | null;
}

const initialState: IUserState = {
  email: null,
  name: null,
  role: null,
  gender: null,
  avatar: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state: IUserState, action: PayloadAction<IUserState>) => {
      return {
        ...state,
        email: action.payload.email,
        name: action.payload.name,
        role: action.payload.role,
        isLoggedIn: true,
      };
    },
    logout: (state: IUserState) => {
      return {
        ...state,
        email: null,
        name: null,
        role: null,
        gender: null,
        avatar: null,
        isLoggedIn: false,
      };
    },
  },
});

export const { login } = userSlice.actions;

export const selectorUser = (state: RootState) => state.user;

export default userSlice.reducer;
