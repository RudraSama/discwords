"use client"

import ServerList from '@/components/ServerList';
import FriendsList from "@/components/FriendList"
import {useSession, SessionProvider, signOut} from 'next-auth/react';
import ActiveFriendsPage from '@/components/ActiveFriendsPage';


const Dashboard = ()=>{
    
    const {data: session} = useSession();


    return (
        <main className='flex'>
            <ServerList/>
            <FriendsList/>
            <ActiveFriendsPage/>
        </main>
    );
}


export default Dashboard;
