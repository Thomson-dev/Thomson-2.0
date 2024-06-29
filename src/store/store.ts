import { configureStore } from '@reduxjs/toolkit'
import loginReducer from '../features/Login/LoginSlice'
import userDetailsReducer from '../features/Login/userDetails'

export const store = configureStore({

    reducer: {
    login : loginReducer,
    userDetails : userDetailsReducer
    },
  })

  export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch