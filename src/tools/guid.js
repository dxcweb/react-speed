/**
 * Created by dxc on 2016/9/20.
 */
export default function () {
    let hexDigits = "0123456789abcdef", s = [];
    for (var i = 0; i < 32; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    return s.join("");
}