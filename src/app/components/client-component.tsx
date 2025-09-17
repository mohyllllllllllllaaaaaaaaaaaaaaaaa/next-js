'use client';
import React, {ReactNode} from 'react';


export interface ClientComponentProps {
    children?: ReactNode;
}
function ClientComponent({children}: ClientComponentProps) {
    console.log('Client Component');

    return (
        <div>
            <span>Client Component</span>

            {children}
        </div>
    );
}

export default ClientComponent;