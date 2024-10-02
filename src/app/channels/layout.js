"use client"
import StoreProvider from '../../lib/StoreProvider';
import ServerList from '../../components/ServerList';
import FriendsList from '../../components/FriendList';

const Layout = ({children})=>{
    
    return (
        <StoreProvider>
            <main className='flex'>
                <ServerList/>
                <FriendsList/>
                {children}
            </main>
        </StoreProvider>
    );
}


export default Layout;
