type inputProps = {
    label: string,
    name: string,
    id: string,
    type: string,
    required: boolean
}

export default function Input({ id, label, ...props }: inputProps) {
    return <p className="my-3">
        <label htmlFor={id} className="mr-3">{label}</label>
        <input {...props} className="border border-black" />
    </p>
}