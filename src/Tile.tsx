import React, { ReactNode } from 'react';

// Types
export interface Props {
    children: ReactNode;
    className: string;
}

const Tile: React.FC<Props> = ({ children, className }) => {
    return (
        <div className={`flex aspect-square w-full items-center justify-center ${className}`}>
            {children}
        </div>
    );
};

export default Tile;
