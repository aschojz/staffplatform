import { useMainStore } from '@/stores/main';
import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../views/dashboard/Dashboard.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '', redirect: 'dashboard' },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: Dashboard,
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../views/login/Login.vue'),
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return { el: to.hash, left: 0, top: 70 };
        } else if (savedPosition) {
            return savedPosition;
        } else {
            return { left: 0, top: 0 };
        }
    },
});

router.beforeEach(async to => {
    console.log('before');
    const store = useMainStore();
    if (!store.user.id || store.user.id < 0) {
        await store.init();
    }
    if (
        to.name !== 'login' &&
        to.name !== 'register' &&
        !to.path.includes('/teams') &&
        !to.path.includes('/polls') &&
        !to.path.includes('/forms') &&
        !store.user.id
    ) {
        return '/login';
    }
    // if (to.path.includes('/admin') && !ADMIN_IDS.includes(store.state.user.id)) {
    //     return '/dashboard';
    // }
});

export default router;
