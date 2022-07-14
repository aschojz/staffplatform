import type { ApiError } from '@/types/ctApi';
import useToasts from './useToasts';

export default function useErrors() {
    const { errorToast } = useToasts();
    const getErrors = (error: ApiError) => {
        if (error.response.data.translatedMessage) {
            errorToast({ message: 'Fehler', note: error.response.data.translatedMessage });
        }
        return error.response.data.errors ?? [];
    };
    return { getErrors };
}
