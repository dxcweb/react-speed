/**
 * Created by dxc on 2016/9/1.
 */
import React from 'react'
import ColorsList from './ColorsList'
import ColorsFind from './ColorsFind'

class Colors extends React.Component {

    render() {
        return (
            <div>
                <ColorsFind />
                <ColorsList/>
            </div>
        );
    }
}
module.exports = Colors;