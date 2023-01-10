import { configureStore } from '@reduxjs/toolkit'
import historyReducer from '../redux/reducer'

export default configureStore({
  reducer: {history: historyReducer}
})