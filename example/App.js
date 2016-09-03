/**
 * Created by dxc on 2016/8/30.
 */
import React from 'react'
export default class App extends React.Component {
    render() {
        return (<div>
            {this.props.children}
        </div>);
    }
}
