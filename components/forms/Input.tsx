type inputProps = {
    label: string,
    name: string,
    id: string,
    type: string,
    required: boolean
}

export default function Input({ id, label, ...props }: inputProps) {
    return <p className="my-3">
        <label htmlFor={id} className="block text-xs uppercase tracking-widest text-custom-sage-dark font-semibold mb-1">{label}</label>
        <input {...props} id={id} className="w-full bg-custom-input border border-custom-brown/10 text-custom-brown text-sm px-4 py-2.5 rounded-full focus:border-2 focus:border-black" />
    </p>
}