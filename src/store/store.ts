
import { configureStore } from "@reduxjs/toolkit"
import userSlice from "./userSlice"
import { authApi } from "./Api/authApi"

 export const store = configureStore({
     reducer:{
       userSlice,
       [authApi.reducerPath]:authApi.reducer,
       
     },
     middleware: (getDefaultMiddlewere)=>getDefaultMiddlewere().concat(authApi.middleware),
     preloadedState:{}
 })

 export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
