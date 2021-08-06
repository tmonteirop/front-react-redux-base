import React from 'react';
import { Router } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from './store/store';

import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import { Routes } from './routes';
import history from './services/history';

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
}

const theme = extendTheme({ colors })

export default function App() {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Router history={history}>
          <Routes />
        </Router>
      </ChakraProvider>
    </Provider>
  )
}