"use client"

import StoreProvider from './../../lib/StoreProvider';

const Layout = ({children})=>{
    
    return (
        <StoreProvider>
            {children}
        </StoreProvider>
    );
}

export default Layout;

