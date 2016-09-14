/**
 * Created by dxc on 2016/9/7.
 */
import {merge} from 'lodash'
import stylePrefixer from './stylePrefixer'
import abbr from './abbr'
export default function (props) {
    El(props);
    abbr(props);
    stylePrefixer(props.style);
}
function El(props) {
    if (props.el == null)
        props.el = 'div'
}