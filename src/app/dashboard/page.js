"use client"

import {useSession, SessionProvider} from 'next-auth/react';

const Dashboard = ()=>{
    
    const {data: session} = useSession();
    console.log(session);

    return (
        <div>
        </div>
    );
}

export default Dashboard;
