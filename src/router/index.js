import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'hello',
            component: require('components/views/Hello/'),
        },
        {
            path: '/find-help',
            name: 'find-help',
            component: require('components/views/Find/'),
        },
        {
            path: '/get-involved',
            name: 'get-involved',
            component: require('components/views/Involve'),
        },
        {
            path: '/about',
            name: 'About',
            component: require('components/views/About'),
        },
        {
            path: '*',
            name: '404',
            component: require('components/views/Hello'),
        },
    ],
});
