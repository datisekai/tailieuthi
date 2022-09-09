import { createSlice } from "@reduxjs/toolkit";

interface AuthITF {
  token: string;
  user: any;
}

const initialState: AuthITF = {
  token: "",
  user: undefined,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("token", action.payload);
    },
    clearAuth: (state) => {
      state.token = "";
      state.user = null;
      localStorage.removeItem("token");
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setToken, clearAuth, setUser } = AuthSlice.actions;
export default AuthSlice.reducer;
