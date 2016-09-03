/**
 * Created by dxc on 2016/8/31.
 */
import React from 'react';
import {Router, Route, Link} from 'react-router'
import classNames from 'classnames';
import './box.less'
import El from '../base/El'
/**
 * Box 类 只是一个div为display:box的类
 * 参数：[
 *      vbox vertical 即 align 垂直排序 即box-align:[s|e|c]
 *      hbox Horizontal 即 pack  水平排序 即box-pack:[s|e|c]
 *      flex:[1|2|3|4|5] 拉伸比例  即flex:[1|2|3|4|5]
 * ]
 */
export default class Box extends React.Component {
    render() {
        const {f, hbox, vbox, className, children, ...others} = this.props;
        const cls = classNames({
            speed_box: true,
            ['speed_box_align_' + vbox]: vbox,
            ['speed_box_pack_' + hbox]: hbox,
            ['speed_flex' + f]: f,
            [className]: className
        });
        return (
            <El {...others} className={cls}>{children}</El>
        );
    }
}