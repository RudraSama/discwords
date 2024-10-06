"use client"
import StoreProvider from '../../lib/StoreProvider';
import ServerList from '../../components/ServerList';
import FriendsList from '../../components/FriendList';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { setUser } from '@/lib/features/userSlice';


const Layout = ({children})=>{
    
    const router = useRouter();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);

    useEffect(()=>{

        if(!user){
            router.push('/login');
        }
        else{
            dispatch(setUser(user));
        }

    },[user])
    
    return (
        <StoreProvider>
            <main className='flex'>
                <ServerList/>
                <FriendsList/>
                {children}
            </main>
        </StoreProvider>
    );
}


export default Layout;
