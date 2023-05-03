import {createSlice} from "@reduxjs/toolkit";


const JwtSlice = createSlice({
    name: 'jwt',
    initialState: {
        token: '',
    },
    reducers: {
        setToken(state, action) {
            state.token = action.payload;
        }
    }
});

export const {
    setToken
} = JwtSlice.actions;

export const jwtReducer = JwtSlice.reducer;