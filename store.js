import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/CounterSlics'
export const store = configureStore({
    reducer: {
       counter: counterReducer
    }
})


