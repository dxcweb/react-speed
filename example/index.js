/**
 * Created by dxc on 2016/8/30.
 */
import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import * as reducers from './reducers/index'
import {Router, Route, hashHistory, IndexRoute, Link} from 'react-router'
import {syncHistoryWithStore, routerReducer} from 'react-router-redux'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import React from 'react'
import routes from './routes';


const reducer = combineReducers({...reducers});

const store = createStore(reducer);
const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history} routes={routes}/>
    </Provider>,
    document.getElementById('app')
);
