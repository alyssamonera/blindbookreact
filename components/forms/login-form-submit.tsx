import { useFormStatus } from "react-dom";

export default function LoginFormSubmit() {
    const {pending} = useFormStatus();

    return <button disabled={pending} className="mx-3">
        {pending ? "Submitting, please wait..." : "Submit"}
    </button>
}