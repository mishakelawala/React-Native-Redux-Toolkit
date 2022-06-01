import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import counterSlice from './counterSlice';

const persistConfig = {
    key: "root",
    version: 1,
    storage: AsyncStorage,
}

const rootReducer = combineReducers({
    counter: persistReducer(persistConfig, counterSlice),
})

export const store = createStore(rootReducer);
export const persistor = persistStore(store);

