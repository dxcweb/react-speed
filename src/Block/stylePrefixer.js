/**
 * Created by dxc on 2016/9/7.
 */
import {size} from 'lodash'
import prefixAll from 'inline-style-prefixer/static'
// const styles = {
//     display: 'flex'
// };
// prefixer.prefix(styles);
// console.log(styles);
export default function (style) {
    if (size(style) == 0) {
        return {};
    }
    prefixAll(style);
    if (style.display != null) {
        style.display='flex'
    }
}