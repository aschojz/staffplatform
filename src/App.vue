<script setup lang="ts">
import { RouterView } from 'vue-router';
import { InfoMessageContainer } from 'churchtools-styleguide';
import useToasts from './composables/useToasts';
import Navigation from './components/Navigation.vue';
const { toasts, removeToast } = useToasts();
</script>

<template>
    <div class="flex flex-col min-h-screen bg-gradient-to-r from-gray-700/20 to-primary-700/20">
        <Navigation />
        <RouterView />
    </div>
    <InfoMessageContainer :messages="toasts" @close-info-message="removeToast($event.id)" />
</template>
<style>
html {
    font-size: 62.5%;
}
body {
    --primary-50: var(--teal-50);
    --primary-100: var(--teal-100);
    --primary-200: var(--teal-200);
    --primary-300: var(--teal-300);
    --primary-400: var(--teal-400);
    --primary-500: var(--teal-500);
    --primary-600: var(--teal-600);
    --primary-700: var(--teal-700);
    --primary-800: var(--teal-800);
    --primary-900: var(--teal-900);

    /* --markdown-size: 1;
    --menu-default-height: 56px; */
    font-size: 1.4rem;
    font-family: 'Lato', sans-serif;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}
</style>
