import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import { usersInitialState } from "../initialState"
import type { User } from "../../interface"

export const usersSlice = createSlice({
    name: 'users',
    initialState: usersInitialState,
    reducers: {
        addUser: (state, action: PayloadAction<User>) => {
            state.push(action.payload);
        },
        deleteUser: (state, action: PayloadAction<string>) => {
            return state.filter(user => user.userId !== action.payload)
        }
    }
})