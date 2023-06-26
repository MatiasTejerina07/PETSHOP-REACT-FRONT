import React from 'react'
import { useRouteError } from 'react-router-dom'

export default function NotFound() {
    const error = useRouteError()
    console.log(error.status);
    return (
        <div className='flex h-screen w-full justify-center items-center'>
            <p className='text-[20px]'>{error?.status} {error?.error?.message}</p>
        </div>
    )
}
