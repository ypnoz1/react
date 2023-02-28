import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
//-----------------------------------   css   -----------------------------------
import './assets/css/vendor/bootstrap/bootstrap.min.css';
//-----------------------------------   components   -----------------------------------
import store from './store/store';
import App from './App';
import './assets/css/style.css';
ReactDOM.render(  
    <Provider store={store}>
        <Router basename={'/'}>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
