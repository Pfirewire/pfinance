import {createSlice} from "@reduxjs/toolkit";

const KeysSlice = createSlice({
    name: 'keys',
    initialState: {
        jwtToken: '',
        linkToken: '',
    },
    reducers: {
        setJwtToken(state, action) {
            state.jwtToken = action.payload;
        },
        setLinkToken(state, action) {
            state.linkToken = action.payload;
        }
    },
});

export const {
    setJwtToken,
    setLinkToken,
} = KeysSlice.actions;

export const keysReducer = KeysSlice.reducer;