import React, { FC } from 'react';

const Header: FC = () => {
    return (
        <header>
            <div className='flex justify-center items-center bg-[url(/public/space-bk.jpg)] bg-no-repeat h-full bg-top'>
                <div className='container py-28 px-4'>
                    <h1 className='text-white text-4xl font-bold text-center'>Space-X Past Launches 🚀</h1>
                    <p className='text-white text-xl font-medium text-center'>With GraphQL</p>
                </div>
            </div>
        </header >
    );
}

export default Header;
