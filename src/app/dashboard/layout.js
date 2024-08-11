"use client"
import {SessionProvider} from 'next-auth/react';

const Layout = ({children})=>{

    
    return (
        <>
            <SessionProvider>
                {children}
            </SessionProvider>
        </>
    );
}


export default Layout;
