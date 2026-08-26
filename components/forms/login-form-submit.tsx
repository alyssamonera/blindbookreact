import { useFormStatus } from "react-dom";

export default function LoginFormSubmit() {
    const {pending} = useFormStatus();

    return <button disabled={pending} className="my-3 py-3 mt-auto rounded-full w-full bg-custom-brown text-custom-cream hover:bg-background hover:text-custom-brown-dark font-semibold cursor-pointer transition-colors duration-300 focus:border-2 focus:border-black disabled:cursor-auto disabled:opacity-60">
        {pending ? "Submitting, please wait..." : "Submit"}
    </button>
}