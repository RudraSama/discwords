"use client"

import ServerList from '@/components/ServerList';
import {useSession, SessionProvider, signOut} from 'next-auth/react';

const Dashboard = ()=>{
    
    const {data: session} = useSession();
    // console.log(session);

    return (
        <div>
            <ServerList/>
            <button onClick={signOut}>Hehe Logout</button>
        </div>
    );
}

export default Dashboard;
