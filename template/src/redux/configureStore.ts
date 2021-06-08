import { applyMiddleware, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import { initialState, rootReducer, persistWhitelist } from './rootReducer';
import AsyncStorage from '@react-native-community/async-storage';
import { composeWithDevTools } from 'redux-devtools-extension';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: persistWhitelist,
};

export const configureStore = () => {
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const store = createStore(
    persistedReducer,
    initialState,
    composeWithDevTools(),
  );
  const persistor = persistStore(store);

  return {
    store,
    persistor,
  };
};
