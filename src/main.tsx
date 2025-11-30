// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { configureStore } from '@reduxjs/toolkit'

import './index.css'
import App from './App.tsx'
import { usersSlice, postsSlice } from './Redux/Slice'
import { Provider as ReduxProvider } from 'react-redux'

const store = configureStore({
  reducer: { users: usersSlice.reducer, posts: postsSlice.reducer }
})

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>
  // </StrictMode>,
)
