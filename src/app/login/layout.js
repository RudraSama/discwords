"use client"
import {SessionProvider} from 'next-auth/react';

const Layout = ({children})=>{

    console.log("from alyouttttt");
    return (
        <>
            <SessionProvider>
                {children}
            </SessionProvider>
        </>
    );
}


export default Layout;
