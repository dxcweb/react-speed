/**
 * Created by dxc on 2016/9/1.
 */
import React from 'react'
import Box from 'speed/box/Box'
import VFlex from 'speed/flex/VFlex'
class Colors extends React.Component {
    render() {
        const {children} = this.props;
        return (
            <Box f="1">
                <VFlex w="100%">
                    {children}
                </VFlex>
            </Box>
        );
    }
}
module.exports = Colors;