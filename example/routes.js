/**
 * Created by dxc on 2016/8/30.
 */
import App from './App'

let Home = {
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./pages/Home'))
        })
    }
};
let Colors = {
    path: '/colors',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./pages/base/colors/Colors'))
        })
    }
};
let Button = {
    path: '/button',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./pages/Button/Button'))
        })
    }
};

export default {
    childRoutes: [{
        indexRoute: Home,
        path: '/',
        component: App,
        childRoutes: [Colors,Button]
    }]
}