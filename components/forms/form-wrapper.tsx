"use client";

type FormWrapperProps = {
    action: (payload: FormData) => void,
    children: React.ReactNode,
    formState: { message: string | null, error: boolean}
};

const FormWrapper: React.FC<FormWrapperProps> = ({ children, action, formState }) => {
    return <form action={action}>
        {children}
        {formState.message && formState.error ? <p>{formState.message}</p> : ''}
    </form>
}

export default FormWrapper;