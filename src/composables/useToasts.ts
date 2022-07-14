import type { InfoMessage } from 'churchtools-styleguide/dist/types/components/infos/InfoMessage/InfoMessage.vue';
import { useMainStore } from '@/stores/main';
import { computed } from 'vue';

export default function useToasts() {
    const mainStore = useMainStore();
    const toasts = computed(() => mainStore.toasts);

    const addToast = (toast: Omit<InfoMessage, 'id'>) => {
        mainStore.toasts.push({ id: crypto.randomUUID(), ...toast });
    };

    const removeToast = (id: string) => {
        const index = mainStore.toasts.findIndex(toast => toast.id === id);
        if (index >= 0) {
            mainStore.toasts.splice(index, 1);
        }
    };
    const clearToasts = () => (mainStore.toasts.length = 0);

    const successToast = (toast: { message: string; note?: string }) =>
        addToast({ ...toast, type: 'SUCCESS', timeout: 3000 });

    const errorToast = (toast: { message: string; note?: string }) => addToast({ ...toast, type: 'ERROR' });
    const infoMessage = (toast: { message: string; note?: string }) => addToast({ ...toast, type: 'INFO' });
    const warningMessage = (toast: { message: string; note?: string }) => addToast({ ...toast, type: 'WARNING' });

    return { toasts, successToast, errorToast, removeToast, infoMessage, warningMessage, clearToasts };
}
