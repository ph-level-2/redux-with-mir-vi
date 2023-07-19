import { createSlice } from '@reduxjs/toolkit';

interface IUserState {
  user: {
    email: string | null;
  };
  isLoading: boolean;
  isError: boolean;
  error: string | null;
}

const initialState: IUserState = {
  user: {
    email: null,
  },
  error: null,
  isError: false,
  isLoading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});
export default userSlice.reducer;
