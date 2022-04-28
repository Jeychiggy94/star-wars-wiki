import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { applyMiddleware, compose, createStore } from 'redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { BrowserRouter } from 'react-router-dom'
import Thunk from 'redux-thunk'

import { ChakraProvider } from '@chakra-ui/react'
import reducers from './state/RootReducers'

const store = createStore(reducers, compose(applyMiddleware(Thunk)))


const persistor = persistStore(store)



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <PersistGate persistor={persistor}>
              <BrowserRouter>
                  <ChakraProvider>
                      <App />
                  </ChakraProvider>
              </BrowserRouter>
          </PersistGate>
      </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
