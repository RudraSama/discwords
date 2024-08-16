"use client"

import ServerList from '@/components/ServerList';
import FriendsList from "@/components/FriendList"
import {useSession, SessionProvider, signOut} from 'next-auth/react';
import ActiveFriendsPage from '@/components/ActiveFriendsPage';
import { stompInit, sendMessage } from '@/lib/websocket/websocket';

const Dashboard = ()=>{
    
    const {data: session} = useSession();
    const token = "eyJhbGciOiJIUzI1NiJ9.eyJpZCI6IjU4NjMxMDA3NDEzOCIsImVtYWlsIjoibHVja3kyQGx1Y2t5LmNvbSIsInN1YiI6ImdhdXJhdiIsImlhdCI6MTcyMzU4NjMxMSwiZXhwIjoxNzMxMzYyMzExfQ.LUboJiBNmXmdVCaCjuBXjchyFSzkkEdnfOOUyFU7ltI"
    

    const stompClient = stompInit("http://localhost:8080/ws", token, `conversation/1`); 

    return (
        <main className='flex'>
            <ServerList/>
            <FriendsList/>
            <ActiveFriendsPage/>
        </main>
    );
}


export default Dashboard;
