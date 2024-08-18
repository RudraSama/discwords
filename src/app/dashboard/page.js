"use client"

import {useEffect} from 'react';
import ServerList from '@/components/ServerList';
import FriendsList from "@/components/FriendList"
import {useSession, SessionProvider, signOut} from 'next-auth/react';
import ActiveFriendsPage from '@/components/ActiveFriendsPage';


const Dashboard = ()=>{
    
    const token = "eyJhbGciOiJIUzI1NiJ9.eyJpZCI6IjU4NjMxMDA3NDEzOCIsImVtYWlsIjoibHVja3kyQGx1Y2t5LmNvbSIsInN1YiI6ImdhdXJhdiIsImlhdCI6MTcyMzU4NjMxMSwiZXhwIjoxNzMxMzYyMzExfQ.LUboJiBNmXmdVCaCjuBXjchyFSzkkEdnfOOUyFU7ltI"

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
