"use client"

import ServerList from '@/components/ServerList';
import ChannelList from '@/components/ChannelList';
import FriendsList from '@/components/FriendList';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import {useEffect} from 'react'
import { setUser } from '@/lib/features/userSlice';

const Layout = ({children, params})=>{

    const router = useRouter();
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    useEffect(()=>{
        if(!user){
            router.push('/login');
        }
        else {
            dispatch(setUser(user));
        }
    },[user])

    const serverId = params.serverId;
    console.log(serverId);

    console.log(params);
    return (
        <main className='flex'>
            <ServerList/>
            {serverId==="%40me"?<FriendsList/>:<ChannelList/>}
            {children}
        </main>
    );
}


export default Layout;
