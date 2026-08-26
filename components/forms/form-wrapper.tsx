"use client";

type FormWrapperProps = {
    action: (payload: FormData) => void,
    children: React.ReactNode,
    formState: { message: string | null, error: boolean }
};

const FormWrapper: React.FC<FormWrapperProps> = ({ children, action, formState }) => {
    return <form action={action} className="bg-white/80 backdrop-blur-xl border border-white/70 shadow-2xl shadow-black/20 p-8 rounded-3xl w-80 h-full flex flex-col">
        <div className="flex flex-col flex-1">
            {children}
        </div>
        {formState.message && formState.error ? <p className="text-red-900 text-sm mt-3">{formState.message}</p> : ''}
    </form>
}

export default FormWrapper;