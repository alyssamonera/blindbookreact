"use server";

import { revalidatePath } from "next/cache";
import { auth } from "../auth/server";
import { redirect } from "next/navigation";

type FormState = {
    message: string | null,
    error: boolean
}

export async function logout() {
    await auth.signOut();
    revalidatePath('/');
    redirect('/');
}

export async function login(prevState: FormState, formData: FormData): Promise<FormState> {
    const name = formData.get('name');
    const email = formData.get('email');
    const password = formData.get('password');
    const formType = formData.get("formType");

    if ((typeof name !== 'string' && formType === 'signup') || typeof email !== 'string' || typeof password !== 'string') {
        return {
            message: 'Invalid input',
            error: true
        }
    }

    const { data, error } = formType === 'signup' && typeof name === 'string' ? await auth.signUp.email({
        name, email, password
    }) : await auth.signIn.email({
        email, password
    });

    if (error && error.message) {
        return {
            message: error.message,
            error: true
        }
    }

    if (data && data.user) {
        revalidatePath('/profile');
        redirect('/profile');
    }

    return {
        message: 'Something went wrong.',
        error: true
    }
}