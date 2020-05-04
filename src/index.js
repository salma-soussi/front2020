import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import './index.css';
import reducer from './reducer'
import App from './App';


// Save Date to Local Storage
// function saveToLocalStorage(state){
//     try{
//         const serializedState = JSON.stringify(state)
//         localStorage.setItem('state', serializedState)
//     } catch(e) {
//         console.log(e)
//     }
// }

// Load Data from Local Storage
// function loadFormLocalStorage() {
//     try{
//         const serializedState = localStorage.getItem('state')
//         if (serializedState === null) return undefined
//         return JSON.parse(serializedState)
//     } catch(e) {
//         console.log(e)
//         return undefined
//     }
// }

// const persistedState = loadFormLocalStorage()

const store=createStore(
    reducer,
    // persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

// store.subscribe(() => saveToLocalStorage(store.getState()))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>    
    , document.getElementById('root'));

