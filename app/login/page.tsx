"use client";

import { login } from "@/lib/actions/login";
import { useActionState } from "react";
import LoginFormSubmit from "@/components/forms/login-form-submit";
import Input from "@/components/forms/Input";
import FormWrapper from "@/components/forms/form-wrapper";

export default function LoginPage() {
    const [signupFormState, signupFormAction] = useActionState(login, { message: null, error: false });
    const [loginFormState, loginFormAction] = useActionState(login, { message: null, error: false });

    return <div>
        <main className="flex flex-wrap gap-40">
            <FormWrapper action={signupFormAction} formState={signupFormState}>
                <div>
                    <h2>Sign up to save your dates</h2>
                    <Input type="text" id="name" name="name" label="Name" required />
                    <Input type="email" id="email" name="email" label="Email" required />
                    <Input type="password" id="password" name="password" label="Password" required />
                    <input type="hidden" id="formType" name="formType" value="signup" />
                    <LoginFormSubmit />
                </div>
            </FormWrapper>
            <FormWrapper action={loginFormAction} formState={loginFormState}>
                <div>
                    <h2>Login to view your dates</h2>
                    <Input type="email" id="email" name="email" label="Email" required />
                    <Input type="password" id="password" name="password" label="Password" required />
                    <input type="hidden" id="formType" name="formType" value="login" />
                    <LoginFormSubmit />
                </div>
            </FormWrapper>
        </main>
    </div>
}