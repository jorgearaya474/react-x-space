import React, { FC, ReactNode } from 'react';

interface CardProps {
    children: ReactNode;
    className?: string;
}

const Card: FC<CardProps> = (props) => {
    const classes = `bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 ${props.className || ''}`;
    return (
        <div className={classes}>
            {props.children}
        </div>
    );
}

export default Card;