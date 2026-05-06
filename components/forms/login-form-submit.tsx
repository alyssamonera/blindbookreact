import { useFormStatus } from "react-dom";

export default function LoginFormSubmit() {
    const {pending} = useFormStatus();

    return <button disabled={pending} className="my-3 p-3 mt-auto rounded-md w-1/1 bg-green-800 text-white hover:bg-green-400 hover:text-black cursor-pointer disabled:cursor-auto">
        {pending ? "Submitting, please wait..." : "Submit"}
    </button>
}