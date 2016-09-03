/**
 * Created by dxc on 2016/7/12.
 */

import React from 'react';
import classNames from 'classnames';
import './Flex.less'
import El from '../base/El'

export default class VFlex extends React.Component {
    render() {
        const {className, children, ...others} = this.props;
        const cls = classNames({
            speed_flex: true,
            speed_v_flex: true,
            [className]: className
        });
        return (
            <El {...others} className={cls}>{children}</El>
        );
    }
}