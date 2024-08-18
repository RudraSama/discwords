"use client"
import {SessionProvider} from 'next-auth/react';
import StoreProvider from './StoreProvider';


const Layout = ({children})=>{

    
    return (
        <>
            <SessionProvider>
                <StoreProvider>
                    {children}
                </StoreProvider>
            </SessionProvider>
        </>
    );
}


export default Layout;
