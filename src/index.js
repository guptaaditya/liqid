import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import RoutesList from './routes/'
import storeConfigurer from './store/'
import * as serviceWorker from './serviceWorker';
const store = storeConfigurer()

ReactDOM.render(
    <Provider store={store}>
      <RoutesList />
    </Provider>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
