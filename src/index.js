import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import storeConfigurer from './store/';
import * as serviceWorker from './serviceWorker';
import { loadState, saveState} from './utils';
import RoutesList from './routes/';
const preState = loadState();
let store;
if (preState) {
  store = storeConfigurer(preState);
} else {
  store = storeConfigurer();
}
store.subscribe(() => saveState(store.getState()));
ReactDOM.render(
    <Provider store={store}>
      <RoutesList />
    </Provider>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
