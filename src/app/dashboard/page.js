"use client"

import ServerList from '@/components/ServerList';
import FriendsList from "@/components/FriendList"
import {useSession, SessionProvider, signOut} from 'next-auth/react';
import AcitveFriendsPage from '@/components/ActiveFriendsPage';
import {useSelector, useDispatch} from 'react-redux';
import {incrementCounter, decrementCounter} from '../../lib/features/counterSlice';

const Dashboard = ()=>{
    
    const {data: session} = useSession();
    const {counter} = useSelector((state)=>state.counter);
    const dispatch = useDispatch();

    // console.log(session);

    return (
        <main className='flex'>
            <ServerList/>
            <FriendsList/>
            <AcitveFriendsPage/>
        </main>
    );
}

export default Dashboard;
