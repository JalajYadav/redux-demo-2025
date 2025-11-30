import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import { postsInitialState } from "../initialState"
import type { POST } from "../../interface"

export const postsSlice = createSlice({
    name: 'posts',
    initialState: postsInitialState,
    reducers: {
        addPost: (state, action: PayloadAction<POST>) => {
            state.push(action.payload);
        },
        deletePost: (state, action: PayloadAction<string>) => {
            return state.filter(post => post.id !== action.payload)
        },
        editPost: (state, action: PayloadAction<{ id: string, newContent: string }>) => {
            const post = state.find(post => post.id === action.payload.id)
            if (post) {
                post.content = action.payload.newContent;
            }
        }
    }
})