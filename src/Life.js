/**
 * Created by dxc on 2016/9/2.
 */
import React, {Component, PropTypes} from 'react';
export default class Life extends Component {
    static propTypes = {};
    static defaultProps = {};
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

    }

    //对于被初始化挂载到 CSSTransitionGroup 的组件，它和 componentDidMount() 在相同时间被调用 。它将会阻塞其它动画发生，直到callback被调用。它只会在CSS TransitionGroup 初始化渲染时被调用。
    componentWillAppear(callback) {
        setTimeout(callback, 0);
    }

    //在传给componentWillAppear的回调函数被调用后调用。
    componentDidAppear() {

    }

    //对于被添加到已存在的 CSSTransitionGroup 的组件，它和 componentDidUpdate() 在相同时间被调用 。它将会阻塞其它动画发生，直到callback被调用。它不会在 CSSTransitionGroup 初始化渲染时被调用。
    componentWillEnter(callback) {
        setTimeout(callback, 0);
    }

    //在传给 componentWillEnter 的回调函数被调用之后调用。
    componentDidEnter() {

    }

    //在子级从 ReactCSSTransitionGroup 中移除时调用。虽然子级被移除了，ReactTransitionGroup 将会保持它在DOM中，直到callback被调用。
    componentWillLeave(callback) {

    }

    //在willLeave callback 被调用的时候调用（与 componentWillUnmount 同一时间）。
    componentDidLeave() {

    }

    //组件接收到新的props时会调用，一般在组件嵌套中比较常见，单一组件state变化是不会执行这个函数的
    render() {
        return (<div>生命周期</div>)
    }
}