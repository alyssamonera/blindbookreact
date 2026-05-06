import {ReactNode} from 'react';

export default function LoginHeading({children}: {children: ReactNode}) {
    return <h2 className='text-lg font-bold'>
        {children}
    </h2>
}