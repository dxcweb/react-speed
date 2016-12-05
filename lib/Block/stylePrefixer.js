/**
 * Created by dxc on 2016/9/7.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _lodash = require('lodash');

var _inlineStylePrefixerStatic = require('inline-style-prefixer/static');

var _inlineStylePrefixerStatic2 = _interopRequireDefault(_inlineStylePrefixerStatic);

// const styles = {
//     display: 'flex'
// };
// prefixer.prefix(styles);
// console.log(styles);

exports['default'] = function (style) {
    if ((0, _lodash.size)(style) == 0) {
        return {};
    }
    (0, _inlineStylePrefixerStatic2['default'])(style);
    if (style.display != null) {
        style.display = 'flex';
    }
};

module.exports = exports['default'];