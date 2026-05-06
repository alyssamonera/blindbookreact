"use client";

type FormWrapperProps = {
    action: (payload: FormData) => void,
    children: React.ReactNode,
    formState: { message: string | null, error: boolean }
};

const FormWrapper: React.FC<FormWrapperProps> = ({ children, action, formState }) => {
    return <form action={action} className="bg-white p-5 rounded-xl">
        <div className="flex flex-col h-full">
            {children}
        </div>
        {formState.message && formState.error ? <p>{formState.message}</p> : ''}
    </form>
}

export default FormWrapper;