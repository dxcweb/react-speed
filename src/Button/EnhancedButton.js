/**
 * Created by dxc on 2016/9/2.
 */
import React, {Component, PropTypes} from 'react';
import El from '../base/El'
export default class EnhancedButton extends Component {
    static propTypes = {
        disabled: PropTypes.bool,//禁用
        disableFocusRipple: PropTypes.bool,//禁用焦点异常
    };
    static defaultProps = {};
    state = {
        isKeyboardFocused: false//
    };
    //渲染前调用一次，这个时候DOM结构还没有渲染。fv
    componentWillMount() {
    }

    //渲染完成后调用一次，这个时候DOM结构已经渲染了。这个时候就可以初始化其他框架的设置了，如果利用jQuery绑定事件等等。
    componentDidMount() {

    }

    //初始化渲染不会调用，在接收到新的props时，会调用这个方法。
    componentWillReceiveProps() {

    }

    //初始化渲染不会调用，接收到新的props或state时调用。
    shouldComponentUpdate() {

    }

    //初始化渲染不会调用，更新前调用。
    componentWillUpdate() {

    }

    //初始化渲染不会调用，更新后调用。
    componentDidUpdate() {

    }

    //组件移除前调用。
    componentWillUnmount() {

    }

    createButtonChildren() {
        const {
            centerRipple,
            children,
            disabled,
            disableFocusRipple,
            disableKeyboardFocus,
            disableTouchRipple,
            focusRippleColor,
            focusRippleOpacity,
            touchRippleColor,
            touchRippleOpacity,
        } = this.props;
        const {isKeyboardFocused} = this.state;

        // Focus Ripple
        const focusRipple = isKeyboardFocused && !disabled && !disableFocusRipple && !disableKeyboardFocus ? (
            <FocusRipple
                color={focusRippleColor}
                opacity={focusRippleOpacity}
                show={isKeyboardFocused}
            />
        ) : undefined;

        // Touch Ripple
        const touchRipple = !disabled && !disableTouchRipple ? (
            <TouchRipple
                centerRipple={centerRipple}
                color={touchRippleColor}
                opacity={touchRippleOpacity}
            >
                {children}
            </TouchRipple>
        ) : undefined;

        return createChildFragment({
            focusRipple,
            touchRipple,
            children: touchRipple ? undefined : children,
        });
    }

    //组件接收到新的props时会调用，一般在组件嵌套中比较常见，单一组件state变化是不会执行这个函数的
    render() {
        const {...other}= this.props;

        const props = {
            ...other,
            style: prepareStyles(mergedStyles),
            ref: 'enhancedButton',
            disabled: disabled,
            href: href,
            onBlur: this.handleBlur,
            onClick: this.handleClick,
            onFocus: this.handleFocus,
            onKeyUp: this.handleKeyUp,
            onKeyDown: this.handleKeyDown,
            onTouchTap: this.handleTouchTap,
            tabIndex: tabIndex,
            type: type
        };
        const children = this.createButtonChildren();
        return (<El {...props}>生命周期</El>)
    }
}