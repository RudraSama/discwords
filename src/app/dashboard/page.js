"use client"

import ServerList from '@/components/ServerList';
import FriendsList from "@/components/FriendList"
import {useSession, SessionProvider, signOut} from 'next-auth/react';

const Dashboard = ()=>{
    
    const {data: session} = useSession();
    // console.log(session);

    return (
        <main className='flex'>
            <ServerList/>
            <FriendsList/>
            <button onClick={signOut}>Hehe Logout</button>
        </main>
    );
}

export default Dashboard;
