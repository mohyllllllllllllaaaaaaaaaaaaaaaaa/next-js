import React, {ReactNode} from 'react';
import {headers} from "next/headers";

export interface ServerComponentCopyProps {
    children?: ReactNode;
}
function ServerComponentCopy({children}: ServerComponentCopyProps) {
    console.log('Server Component Copy');
    console.log(headers());
    return (
        <div>
            <span>Server Component Copy</span>
            {children}
        </div>
    );
}

export default ServerComponentCopy;