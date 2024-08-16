"use client"

import ServerList from '@/components/ServerList';
import ChannelList from '@/components/ChannelList';
import FriendsList from '@/components/FriendList';

const Layout = ({children, params})=>{

    const serverId = params.serverId;
    console.log(serverId);

    console.log(params);
    return (
        <main className='flex'>
            <ServerList/>
            {serverId==="%40me"?<FriendsList/>:<ChannelList/>}
            {children}
        </main>
    );
}


export default Layout;
