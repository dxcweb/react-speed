/**
 * Created by dxc on 2016/9/7.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _inlineStylePrefixer = require('inline-style-prefixer');

var _inlineStylePrefixer2 = _interopRequireDefault(_inlineStylePrefixer);

var _lodash = require('lodash');

var userAgent = navigator.userAgent;
userAgent = 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.2 (KHTML, like Gecko) Chrome/25.0.1216.0 Safari/537.2';
var prefixer = new _inlineStylePrefixer2['default']({
    userAgent: userAgent
});
// const styles = {
//     display: 'flex'
// };
// prefixer.prefix(styles);
// console.log(styles);

exports['default'] = function (style) {
    if ((0, _lodash.size)(style) == 0) {
        return {};
    }
    prefixer.prefix(style);
};

module.exports = exports['default'];