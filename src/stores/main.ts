import { defineStore } from 'pinia';
import { churchtoolsClient } from '@churchtools/churchtools-client';
import type { Person, WhoAmIResult } from '@/types/ctApi';
import type { InfoMessage } from 'churchtools-styleguide/dist/types/components/infos/InfoMessage/InfoMessage.vue';

export const useMainStore = defineStore('main', {
    state: () => ({
        user: {} as Person,
        toasts: [] as InfoMessage[],
    }),
    getters: {},
    actions: {
        init() {
            return churchtoolsClient.get('/whoami').then((result: WhoAmIResult) => {
                if (result.id >= 0) {
                    this.user = result;
                }
            });
        },
        async login(payload: { username: string; password: string }) {
            await churchtoolsClient.post('/login', payload);
            this.init();
        },
    },
});
