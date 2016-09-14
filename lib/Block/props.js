/**
 * Created by dxc on 2016/9/7.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _lodash = require('lodash');

var _stylePrefixer = require('./stylePrefixer');

var _stylePrefixer2 = _interopRequireDefault(_stylePrefixer);

var _abbr = require('./abbr');

var _abbr2 = _interopRequireDefault(_abbr);

exports['default'] = function (props) {
    El(props);
    (0, _abbr2['default'])(props);
    (0, _stylePrefixer2['default'])(props.style);
};

function El(props) {
    if (props.el == null) props.el = 'div';
    delete props.el;
}
module.exports = exports['default'];