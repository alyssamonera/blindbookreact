type inputProps = {
    label: string,
    name: string,
    id: string,
    type: string,
    required: boolean
}

export default function Input({ id, label, ...props }: inputProps) {
    return <p>
        <label htmlFor={id} className="mx-3">{label}</label>
        <input {...props} className="border border-black" />
    </p>
}