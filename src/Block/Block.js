/**
 * Created by dxc on 2016/9/7.
 */
import React, {Component, PropTypes} from 'react';
import props from './props';


export default class Block extends Component {
    static propTypes = {
        el: PropTypes.any,//元素
        s: PropTypes.object,//style 样式
        w: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),//width 宽
        h: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),//height 高
        bc: PropTypes.string,//background
        p: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),//padding
        pl: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),//paddingLeft
        pr: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),//paddingRight
        pt: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),//paddingTop
        pb: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),//paddingBottom
        m: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),//margin
        ml: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),//marginLeft
        mr: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),//marginRight
        mt: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),//marginTop
        mb: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),//marginBottom
        fc: PropTypes.string,//color 字体颜色
        fs: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),//fontSize 字体大小
        fw: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),//fontWeight 字体粗细
        vf: PropTypes.bool,//垂直
        hf: PropTypes.bool,//水平
        j: React.PropTypes.oneOf(['s', 'c', 'e', 'a', 'b']),//垂直居中
        a: React.PropTypes.oneOf(['s', 'c', 'e'])//水平居中
    };
    static defaultProps = {
        w: null
    };

    render() {
        let {children, ...others} = this.props;
        props(others);
        const {el, ...otherProps}=others;
        const El = el;
        return (
            <El {...otherProps}>{children}</El>
        );
    }
}