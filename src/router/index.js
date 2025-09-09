import { createRouter, createWebHashHistory } from 'vue-router';
import PasswordGenerator from '@/views/PasswordGenerator.vue';

const routes = [
    {
        path: '/',
        name: 'PasswordGenerator',
        component: PasswordGenerator,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;