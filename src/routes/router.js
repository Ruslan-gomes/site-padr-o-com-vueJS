import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import home from '@/pages/home.vue';
import videos from '@/pages/videos.vue';
import sobre from '@/pages/sobre.vue';
import contato from '@/pages/contato.vue';

const routes = [
    {
        path: '/',
        component:home
    },
    {
        path: '/videos',
        component:videos
    },
    {
        path: '/sobre',
        component:sobre
    },
    {
        path: '/contato',
        component:contato
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router;