/**
 * Created by dxc on 2016/8/31.
 */
import React from 'react'
import classNames from 'classnames';
import './panel.less'
import El from '../base/El'
export default class Panel extends React.Component {
    render() {
        const {children, className, ...others} = this.props;
        const cls = classNames({
            speed_panel: true,
            [className]: className
        });
        return (
            <El {...others} className={cls}>{children}</El>
        );
    }
}