import 'materialize-css/dist/css/materialize.min.css' // webpack magic, importing css min files from our npm package
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/App';
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware());

ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector('#root'));