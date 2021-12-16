import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';

interface IUserState {
  id: string;
  email?: string | null;
  name?: string | null;
  role?: string | null;
  gender?: string | null;
  avatar?: string | null;
  isLoggedIn?: boolean;
  isBankAccount?: boolean;
}

const initialState: IUserState = {
  id: '',
  email: null,
  name: null,
  role: null,
  gender: null,
  avatar: null,
  isLoggedIn: false,
  isBankAccount: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<IUserState>) => {
      (state.id = action.payload.id),
        (state.email = action.payload.email),
        (state.name = action.payload.name),
        (state.role = action.payload.role),
        (state.isLoggedIn = true);
    },
    logout: (state: IUserState) => {
      (state.email = null),
        (state.id = ''),
        (state.name = null),
        (state.role = null),
        (state.gender = null),
        (state.avatar = null),
        (state.isLoggedIn = false);
    },

    checkBank: (state, action: PayloadAction<{ isBankAccount: boolean }>) => {
      state.isBankAccount = action.payload.isBankAccount;
    },
  },
});

export const { login, logout, checkBank } = userSlice.actions;

export const selectorUser = (state: RootState) => state.user;

export default userSlice.reducer;
