import { createRouter, createWebHistory } from 'vue-router';
import PasswordGenerator from '@/views/PasswordGenerator.vue';

const routes = [
    {
        path: '/',
        name: 'PasswordGenerator',
        component: PasswordGenerator,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;