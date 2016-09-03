/**
 * Created by dxc on 2016/9/2.
 */
import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import autoPrefix from '../base/autoPrefix'
import transitions from './transitions'
export default class ScaleInChild extends Component {
    static propTypes = {
        enterDelay: PropTypes.number,
        maxScale: PropTypes.number,
        minScale: PropTypes.number
    };
    static defaultProps = {
        enterDelay: 0,
        maxScale: 1,
        minScale: 0
    };
    state = {};
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
        clearTimeout(this.enterTimer);
        clearTimeout(this.leaveTimer);
    }

    //在传给componentWillAppear的回调函数被调用后调用。
    componentDidAppear() {
        this.animate();
    }

    //对于被初始化挂载到 CSSTransitionGroup 的组件，它和 componentDidMount() 在相同时间被调用 。它将会阻塞其它动画发生，直到callback被调用。它只会在CSS TransitionGroup 初始化渲染时被调用。
    componentWillAppear(callback) {
        this.initializeAnimation(callback);
    }


    //对于被添加到已存在的 CSSTransitionGroup 的组件，它和 componentDidUpdate() 在相同时间被调用 。它将会阻塞其它动画发生，直到callback被调用。它不会在 CSSTransitionGroup 初始化渲染时被调用。
    componentWillEnter(callback) {
        this.initializeAnimation(callback);
    }

    //在传给 componentWillEnter 的回调函数被调用之后调用。
    componentDidEnter() {
        this.animate();
    }

    //在子级从 ReactCSSTransitionGroup 中移除时调用。虽然子级被移除了，ReactTransitionGroup 将会保持它在DOM中，直到callback被调用。
    componentWillLeave(callback) {
        const style = ReactDOM.findDOMNode(this).style;

        style.opacity = '0';
        autoPrefix.set(style, 'transform', `scale(${this.props.minScale})`);

        this.leaveTimer = setTimeout(callback, 450);
    }


    initializeAnimation(callback) {
        let style = ReactDOM.findDOMNode(this).style;

        style.opacity = '0';
        autoPrefix.set(style, 'transform', 'scale(0)');
        this.enterTimer = setTimeout(callback, this.props.enterDelay);
    }

    animate() {
        let style = ReactDOM.findDOMNode(this).style;

        style.opacity = '1';
        autoPrefix.set(style, 'transform', `scale(${this.props.maxScale})`);
    }

    //组件接收到新的props时会调用，一般在组件嵌套中比较常见，单一组件state变化是不会执行这个函数的
    render() {
        const {
            children,
            enterDelay, // render中未使用的变量
            maxScale, // render中未使用的变量
            minScale, // render中未使用的变量
            style,
            ...other,
        } = this.props;
        const {prepareStyles} = this.context.muiTheme;
        const mergedRootStyles = Object.assign({}, {
            position: 'absolute',
            height: '100%',
            width: '100%',
            top: 0,
            left: 0,
            transition: transitions.easeOut(null, ['transform', 'opacity']),
        }, style);
        return (
            <div {...other} style={prepareStyles(mergedRootStyles)}>
                {children}
            </div>
        );
    }
}