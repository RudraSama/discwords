"use client"
import {SessionProvider} from 'next-auth/react';
import StoreProvider from './StoreProvider';
import ServerList from '../../components/ServerList';
import FriendsList from "../../components/FriendList"

const Layout = ({children})=>{
    
    return (
        <>
            <SessionProvider>
                <StoreProvider>
                    <main className='flex'>
                        <ServerList/>
                        <FriendsList/>
                        {children}
                    </main>
                </StoreProvider>
            </SessionProvider>
        </>
    );
}


export default Layout;
