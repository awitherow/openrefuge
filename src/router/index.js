import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'hello',
            component: require('../views/Hello/'),
        },
        {
            path: '/find-help',
            name: 'find-help',
            component: require('../views/Find/'),
        },
        {
            path: '/get-involved',
            name: 'get-involved',
            component: require('../views/Involve'),
        },
        {
            path: '/about',
            name: 'About',
            component: require('../views/About'),
        },
        {
            path: '*',
            name: '404',
            component: require('../views/Hello'),
        },
    ],
});
