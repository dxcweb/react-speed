/**
 * Created by dxc on 2016/9/7.
 */
import React from 'react'
// import withExampleBasename from './withExampleBasename'
import {browserHistory, Router, Route, IndexRoute, hashHistory} from 'react-router'
import Home from '../components/Home'
import Block from '../components/Block/Index'
class App extends React.Component {
    render() {
        return (<div>
            {this.props.children}
        </div>);
    }
}
// let history = withExampleBasename(browserHistory, '');
let history = hashHistory;
export default class Index extends React.Component {
    render() {
        return (
            <Router history={history}>
                <Route path="/" component={App}>
                    <IndexRoute component={Home}/>
                    <Route path="block" component={Block}/>
                </Route>
            </Router>
        );
    }
}