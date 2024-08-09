"use client"

import {useSession, SessionProvider, signOut} from 'next-auth/react';

const Dashboard = ()=>{
    
    const {data: session} = useSession();
    console.log(session);

    return (
        <div>
            <h1>I AM DASHBOARD</h1>

            <button onClick={signOut}>Hehe Logout</button>
        </div>
    );
}

export default Dashboard;
