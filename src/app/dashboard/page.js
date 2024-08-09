"use client"

import {useSession, SessionProvider} from 'next-auth/react';

const Dashboard = ()=>{
    
    const {data: session} = useSession();
    console.log(session);

    return (
        <div>
            <h1>I AM DASHBOARD</h1>
        </div>
    );
}

export default Dashboard;
