import { createSlice } from "@reduxjs/toolkit"


const initState = {
    user: null,
    token: null,
    isTokenValid: false,
    keepLoggedIn: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState: initState,
    reducers: {
        setUser(state, action) {
            state.user = action.payload
        },
        setToken(state, action) {
            state.token = action.payload
        },
        setTokenValid(state, action) {
            state.isTokenValid = action.payload;
        },
        setKeepLoggedIn(state, action) {
            state.keepLoggedIn = action.payload
        },
        logout(state) {
            state.user = null
            state.token = null
        }
    }
});

export const { setUser, logout, setToken, setTokenValid, setKeepLoggedIn } = authSlice.actions

export default authSlice.reducer