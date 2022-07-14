import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { churchtoolsClient } from '@churchtools/churchtools-client';
import { API_URL } from '../config';

churchtoolsClient.setBaseUrl(API_URL);

import App from './App.vue';
import router from './router/router';

import './assets/main.css';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mixin({
    methods: {
        t: e => e,
        escapeHtmlRelaxed: e => e,
    },
});

app.mount('#app');
