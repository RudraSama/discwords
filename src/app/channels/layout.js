"use client"
import StoreProvider from '../../lib/StoreProvider';
import ServerList from '../../components/ServerList';
import FriendsList from '../../components/FriendList';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { setUser, fetchUserByToken} from '../../lib/features/userSlice';


const Layout = ({children})=>{

    const {user, authenticated, loading} = useSelector((state)=>state.user);
    const router = useRouter();
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchUserByToken());
    }, []);

    useEffect(()=>{
        if(!loading && !authenticated){
            router.push("/login");
        }
    }, [loading]);


    if(loading){
        return (
            <main>
                loading...
            </main>
        );
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
