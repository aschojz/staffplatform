export type WhoAmIResult = Person;
export interface Person {
    firstName?: string;
    id: number;
}

export interface LoginResult {
    location: string;
    message: string;
    personId: number;
    status: string;
}

export type ErrorObj = { args: []; fieldId: string; message: string; messageKey: string };
export interface ApiError {
    response: {
        data: {
            args?: [];
            errors?: ErrorObj[];
            message: string;
            messageKey?: string;
            translatedMessage?: string;
        };
    };
}
