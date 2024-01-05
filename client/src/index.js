import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './components/App';


/** Redux Store */
import store from './redux/store';
import { Provider } from 'react-redux';
import { QueryProvider } from './lib/react-query/QueryProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <QueryProvider>

  <Provider store={store}>
    <App />
  </Provider>
  </QueryProvider>
);

