/**
 * Created by dxc on 2016/9/7.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _props2 = require('./props');

var _props3 = _interopRequireDefault(_props2);

var Block = (function (_Component) {
    _inherits(Block, _Component);

    function Block() {
        _classCallCheck(this, Block);

        _get(Object.getPrototypeOf(Block.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Block, [{
        key: 'render',
        value: function render() {
            var _props = this.props;
            var children = _props.children;

            var others = _objectWithoutProperties(_props, ['children']);

            (0, _props3['default'])(others);
            var el = others.el;

            var otherProps = _objectWithoutProperties(others, ['el']);

            var El = el;
            return _react2['default'].createElement(
                El,
                otherProps,
                children
            );
        }
    }], [{
        key: 'propTypes',
        value: {
            el: _react.PropTypes.any, //元素
            s: _react.PropTypes.object, //style 样式
            w: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]), //width 宽
            h: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]), //height 高
            bc: _react.PropTypes.string, //background
            p: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]), //padding
            pl: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]), //paddingLeft
            pr: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]), //paddingRight
            pt: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]), //paddingTop
            pb: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]), //paddingBottom
            m: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]), //margin
            ml: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]), //marginLeft
            mr: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]), //marginRight
            mt: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]), //marginTop
            mb: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]), //marginBottom
            fc: _react.PropTypes.string, //color 字体颜色
            fs: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]), //fontSize 字体大小
            fw: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]), //fontWeight 字体粗细
            vf: _react.PropTypes.bool, //垂直
            hf: _react.PropTypes.bool, //水平
            wf: _react.PropTypes.bool, //流布局
            j: _react2['default'].PropTypes.oneOf(['s', 'c', 'e', 'a', 'b']), //垂直居中
            a: _react2['default'].PropTypes.oneOf(['s', 'c', 'e']) //水平居中
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            w: null
        },
        enumerable: true
    }]);

    return Block;
})(_react.Component);

exports['default'] = Block;
module.exports = exports['default'];