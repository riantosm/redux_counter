import {combineReducers, createStore} from 'redux';
import {counter, textInput} from './reducer';
import AsyncStorage from '@react-native-community/async-storage';
import {persistStore, persistReducer} from 'redux-persist';

const persisConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const reducer = combineReducers({counter, textInput});

const persistedReducer = persistReducer(persisConfig, reducer);

//  const configureStore = () => createStore(reducer);

//  export default configureStore;

export default () => {
  let store = createStore(persistedReducer);
  let persistor = persistStore(store);
  return {store, persistor};
};
