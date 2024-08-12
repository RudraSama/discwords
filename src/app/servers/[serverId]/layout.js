"use client"

import ServerList from '@/components/ServerList';
import ChannelList from '@/components/ChannelList';

const Layout = ({children, params})=>{

    console.log(params);
    return (
        <main className='flex'>
            <ServerList/>
            <ChannelList/>
            {children}
        </main>
    );
}


export default Layout;
