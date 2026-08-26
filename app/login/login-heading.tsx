import {ReactNode} from 'react';

export default function LoginHeading({children}: {children: ReactNode}) {
    return <h2 className='text-xl italic pt-serif-regular-italic text-custom-brown-dark mb-5'>
        {children}
    </h2>
}