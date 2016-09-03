/**
 * Created by dxc on 2016/9/2.
 */
import React from 'react'
import compose from 'recompose/compose';
// import EnhancedButton from 'speed/Button/EnhancedButton'
class Button extends React.Component {

    render() {
        var a = {
            a: 1
        };
        var c={...a};
        var b = compose(...a);
        debugger;
        return (<div>222222</div>);
    }
}
module.exports = Button;