import { configureStore } from '@reduxjs/toolkit'
import userSclice from '../userSclice/userSclice'
export default configureStore({
  reducer: {
    userReducer:userSclice
  },
})