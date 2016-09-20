/**
 * Created by dxc on 2016/9/20.
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports["default"] = function () {
    var hexDigits = "0123456789abcdef",
        s = [];
    for (var i = 0; i < 32; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    return s.join("");
};

module.exports = exports["default"];