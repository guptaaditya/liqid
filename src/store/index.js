import { createStore } from 'redux';
import reducer from "../reducers/";

export default function storeConfigurer(initState){
  return createStore(
    reducer,
    initState,
  );
}