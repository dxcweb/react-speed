/**
 * Created by dxc on 2016/9/2.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Life = (function (_Component) {
    _inherits(Life, _Component);

    function Life() {
        _classCallCheck(this, Life);

        _get(Object.getPrototypeOf(Life.prototype), 'constructor', this).apply(this, arguments);

        this.state = {};
    }

    _createClass(Life, [{
        key: 'componentWillMount',

        //渲染前调用一次，这个时候DOM结构还没有渲染。fv
        value: function componentWillMount() {}

        //渲染完成后调用一次，这个时候DOM结构已经渲染了。这个时候就可以初始化其他框架的设置了，如果利用jQuery绑定事件等等。
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {}

        //初始化渲染不会调用，在接收到新的props时，会调用这个方法。
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps() {}

        //初始化渲染不会调用，接收到新的props或state时调用。
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate() {}

        //初始化渲染不会调用，更新前调用。
    }, {
        key: 'componentWillUpdate',
        value: function componentWillUpdate() {}

        //初始化渲染不会调用，更新后调用。
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {}

        //组件移除前调用。
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {}

        //对于被初始化挂载到 CSSTransitionGroup 的组件，它和 componentDidMount() 在相同时间被调用 。它将会阻塞其它动画发生，直到callback被调用。它只会在CSS TransitionGroup 初始化渲染时被调用。
    }, {
        key: 'componentWillAppear',
        value: function componentWillAppear(callback) {
            setTimeout(callback, 0);
        }

        //在传给componentWillAppear的回调函数被调用后调用。
    }, {
        key: 'componentDidAppear',
        value: function componentDidAppear() {}

        //对于被添加到已存在的 CSSTransitionGroup 的组件，它和 componentDidUpdate() 在相同时间被调用 。它将会阻塞其它动画发生，直到callback被调用。它不会在 CSSTransitionGroup 初始化渲染时被调用。
    }, {
        key: 'componentWillEnter',
        value: function componentWillEnter(callback) {
            setTimeout(callback, 0);
        }

        //在传给 componentWillEnter 的回调函数被调用之后调用。
    }, {
        key: 'componentDidEnter',
        value: function componentDidEnter() {}

        //在子级从 ReactCSSTransitionGroup 中移除时调用。虽然子级被移除了，ReactTransitionGroup 将会保持它在DOM中，直到callback被调用。
    }, {
        key: 'componentWillLeave',
        value: function componentWillLeave(callback) {}

        //在willLeave callback 被调用的时候调用（与 componentWillUnmount 同一时间）。
    }, {
        key: 'componentDidLeave',
        value: function componentDidLeave() {}

        //组件接收到新的props时会调用，一般在组件嵌套中比较常见，单一组件state变化是不会执行这个函数的
    }, {
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                'div',
                null,
                '生命周期'
            );
        }
    }], [{
        key: 'propTypes',
        value: {},
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {},
        enumerable: true
    }]);

    return Life;
})(_react.Component);

exports['default'] = Life;
module.exports = exports['default'];