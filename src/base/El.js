/**
 * Created by dxc on 2016/8/31.
 */
import React from 'react'
import {Link} from 'react-router'
import * as colors from './colors'
export default class El extends React.Component {
    render() {
        const {
            el, to,
            children, s, style,
            m, ml, mr, mt, mb,  //各种 margin
            p, pl, pr, pt, pb,  //各种 padding
            w, h,               //宽 高
            bc,                  //背景颜色
            fc, fs, fw,           //字体颜色，字体大小，字体粗细
            ...others
        } = this.props;
        let new_style = style || {};
        //简写的style
        if (s) {
            for (let key in s) {
                new_style[key] = s[key];
            }
        }
        m ? new_style['margin'] = m : 0;
        ml ? new_style['marginLeft'] = ml : 0;
        mr ? new_style['marginRight'] = mr : 0;
        mt ? new_style['marginTop'] = mt : 0;
        mb ? new_style['marginBottom'] = mb : 0;

        p ? new_style['padding'] = p : 0;
        pl ? new_style['paddingLeft'] = pl : 0;
        pr ? new_style['paddingRight'] = pr : 0;
        pt ? new_style['paddingTop'] = pt : 0;
        pb ? new_style['paddingBottom'] = pb : 0;

        w ? new_style['width'] = w : 0;
        h ? new_style['height'] = h : 0;

        bc ? new_style['background'] = colors[bc] ? colors[bc] : bc : 0;

        fc ? new_style['color'] = colors[fc] ? colors[fc] : fc : 0;
        fs ? new_style['fontSize'] = fs : 0;
        fw ? new_style['fontWeight'] = fw : 0;
        const Component = el || 'div';
        if (to) {
            return (
                <Link to={to} {...others} style={new_style}>{children}</Link>
            );
        } else {
            return (
                <Component {...others} style={new_style}>{children}</Component>
            );
        }
    }
}