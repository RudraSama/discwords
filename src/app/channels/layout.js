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

    //need to fix this issue
    /* When this page is loaded (refreshed) - 
     *        - both authenticated and loading sets to false - which casue page to route to "/login"
     *        - We need to either set inital state of loading to true.
     *
     */
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
