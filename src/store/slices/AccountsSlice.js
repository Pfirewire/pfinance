import {createSlice} from "@reduxjs/toolkit";

const AccountsSlice = createSlice({
    name: 'accounts',
    initialState: {
        userAccounts: [],
    },
    reducers: {
        setAccounts(state, action) {
            console.log("Inside setAccounts. accounts:");
            console.log(action.payload);
            state.userAccounts = action.payload;
        },
        addAccount(state, action) {
            state.userAccounts = [...state, action.payload];
        },
        addAccounts(state, action) {
            state.userAccounts = [...state, ...action.payload];
        }
    },
});

export const {
    setAccounts,
    addAccount,
    addAccounts
} = AccountsSlice.actions;

export const accountsReducer = AccountsSlice.reducer;