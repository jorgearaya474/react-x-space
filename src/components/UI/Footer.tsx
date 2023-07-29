import React, { FC } from 'react';

const Footer: FC = () => {
    return (
        <div className='flex justify-center items-center bg-black'>
            <div className='container py-4'>
                <p className='text-gray-500 text-sm font-normal text-center'>© 2023 Jorge Araya</p>
            </div>
        </div>
    );
}

export default Footer;