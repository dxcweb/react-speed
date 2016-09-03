/**
 * Created by dxc on 2016/9/2.
 */
export default {
    set(style, key, value) {
        style[key] = value;
        style['-ms-'+key] = value;
        style['-moz-'+key] = value;
        style['-webkit-'+key] = value;
        style['-o-'+key] = value;
    }
};