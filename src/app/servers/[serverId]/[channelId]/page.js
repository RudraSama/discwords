"use client"

import ActiveFriendsPage from '@/components/ActiveFriendsPage';

const Channel = ({params})=>{

    console.log(params, "from channel");

    return (
        <>
            <ActiveFriendsPage/>
        </>
    );
}


export default Channel;
