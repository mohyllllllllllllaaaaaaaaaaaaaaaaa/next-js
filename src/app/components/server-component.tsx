import React, {ReactNode} from 'react';

export interface ServerComponentProps {
    children?: ReactNode;
}
function ServerComponent({children}: ServerComponentProps) {
    console.log('ServerComponent');
    return (
        <div>
            <span>Server Component</span>
            {children}
        </div>
    );
}

export default ServerComponent;