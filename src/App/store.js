import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import userReducer from '../features/users/userSlice';

const rootReducer = combineReducers({
    users: userReducer
})

const persistConfig = {
    key : 'root',
    storage,
    whitelist:[
        'users'
    ]
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store =  configureStore({
    reducer:persistedReducer
})

export const persistor = persistStore(store);