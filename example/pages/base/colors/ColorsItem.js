/**
 * Created by dxc on 2016/9/1.
 */
import React from 'react'
import * as colors from 'speed/base/colors'
import Box from 'speed/box/Box'
class ColorsItem extends React.Component {
    render() {
        const {color, s} = this.props;
        let style = s || {};
        style.background = colors[color];
        return (
            <Box m="0 10px" f="1" h="30px" vbox="c" hbox="c" s={style}>{color}</Box>
        );
    }
}
module.exports = ColorsItem;