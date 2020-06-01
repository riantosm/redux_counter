import React from 'react';
import {Main} from './screens';
import {Provider} from 'react-redux';
import configureStore from './redux/store';
import {PersistGate} from 'redux-persist/integration/react';

const {store, persistor} = configureStore();

// const store = configureStore();

const App = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Main />
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
