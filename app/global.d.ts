/// <reference types="nativewind/types" />

interface responseType{
    message?: string;
    success: boolean;
    error?: {
        message: string;
    };
}
