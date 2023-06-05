import {createSlice} from "@reduxjs/toolkit";

const AccountsSlice = createSlice({
    name: 'accounts',
    initialState: [],
    reducers: {
        setAccounts(state, action) {
            state = action.payload;
        },
        addAccount(state, action) {
            state = [...state, action.payload];
        },
        addAccounts(state, action) {
            state = [...state, ...action.payload];
        }
    },
});

export const {
    setAccounts,
    addAccount,
    addAccounts
} = AccountsSlice.actions;

export const accountsReducer = AccountsSlice.reducer;