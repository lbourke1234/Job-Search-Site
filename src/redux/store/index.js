import { configureStore, combineReducers } from '@reduxjs/toolkit'
import jobsReducer from '../reducers/jobsReducer'
import searchReducer from '../reducers/searchReducer'
import userReducer from '../reducers/usersReducer'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { encryptTransform } from 'redux-persist-transform-encrypt'

const persistConfig = {
  key: 'root',
  storage: storage,
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_SECRET_KEY,
      onError: (error) => {
        console.log(error)
      }
    })
  ]
}

const mainReducer = combineReducers({
  user: userReducer,
  jobs: jobsReducer,
  search: searchReducer
})

const persistedReducer = persistReducer(persistConfig, mainReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export const persistor = persistStore(store)
