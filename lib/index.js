/**
 * Created by dxc on 2016/9/8.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _BlockBlock = require('./Block/Block');

var _BlockBlock2 = _interopRequireDefault(_BlockBlock);

var _toolsIndex = require('./tools/index');

exports.Block = _BlockBlock2['default'];
exports.guid = _toolsIndex.guid;