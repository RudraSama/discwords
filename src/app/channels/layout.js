"use client"
import StoreProvider from '../../lib/StoreProvider';
import ServerList from '../../components/ServerList';
import FriendsList from '../../components/FriendList';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { setUser } from '@/lib/features/userSlice';


const Layout = ({children})=>{

    const {user} = useSelector((state)=>state.user);
    const router = useRouter();

    console.log(user);

    if(Object.keys(user).length == 0){
        router.push("/login");
    }
    
  
    return (
        <main className='flex'>
            <ServerList/>
            <FriendsList/>
            {children}
        </main>
    );
}


export default Layout;
