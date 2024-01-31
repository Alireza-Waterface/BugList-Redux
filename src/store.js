import { createStore } from "redux";
import reducer from './reducer';

const persistedState = localStorage.getItem('bugListState')
    ? JSON.parse(localStorage.getItem('bugListState'))
    : [];

const store = createStore(reducer, persistedState);

store.subscribe(() => {
    localStorage.setItem('bugListState', JSON.stringify(store.getState()));
});

export default store;