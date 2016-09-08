/**
 * Created by dxc on 2016/9/7.
 */
import InlineStylePrefixer from 'inline-style-prefixer';
import {size} from 'lodash'
let userAgent = navigator.userAgent;
userAgent = 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.2 (KHTML, like Gecko) Chrome/25.0.1216.0 Safari/537.2';
const prefixer = new InlineStylePrefixer({
    userAgent: userAgent
});
// const styles = {
//     display: 'flex'
// };
// prefixer.prefix(styles);
// console.log(styles);
export default function (style) {
    if (size(style) == 0) {
        return {};
    }
    prefixer.prefix(style);
}