<script setup lang="ts">
import { Input, Button } from 'churchtools-styleguide';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useMainStore } from '@/stores/main';
import useToasts from '@/composables/useToasts';
import useErrors from '@/composables/useErrors';
import type { ErrorObj } from '@/types/ctApi';
const mainStore = useMainStore();
const { clearToasts } = useToasts();
const { getErrors } = useErrors();
const router = useRouter();
const formData = ref({
    username: '',
    password: '',
    rememberMe: false,
});
const errors = ref<ErrorObj[]>([]);
const onLogin = async () => {
    mainStore
        .login(formData.value)
        .then(() => {
            clearToasts();
            router.push('/dashboard');
        })
        .catch(error => {
            errors.value = getErrors(error);
        });
};
const getError = (key: string) => {
    const message = errors.value.find(error => error.fieldId === key)?.message ?? '';
    return message
        ? {
              message,
              date: new Date(),
          }
        : undefined;
};
</script>
<template>
    <div class="grid grid-cols-[300px_1fr] flex-grow">
        <div class="p-6 bg-white/75 grid pt-[20vh]">
            <form class="flex flex-col gap-4" @submit.prevent="onLogin">
                <div class="font-bold text-3xl italic text-center pb-6 text-primary-700">EventTools</div>
                <Input v-model="formData.username" :error="getError('username')" label="E-Mail oder Benutzername" />
                <Input v-model="formData.password" :error="getError('password')" label="Passwort" type="password" />
                <Button class="w-full mt-4" icon-after="fas fa-arrow-right" type="submit">Einloggen</Button>
            </form>
        </div>
        <div>
            <img
                class="w-full h-full object-cover"
                src="https://mitarbeit.weihnachten-neu-erleben.de/assets/buehne-2021.c29222b2.jpeg"
            />
        </div>
    </div>
</template>
