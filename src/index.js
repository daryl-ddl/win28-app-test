import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/index';
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.render(
  <ChakraProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ChakraProvider>,
  document.getElementById('root')
);