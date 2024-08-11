"use client"
import ServerList from '@/components/ServerList';
import FriendsList from "@/components/FriendList"
import Nitro from '@/components/Nitro';
import Shop from '@/components/Shop';

const MiddleComponent = ({params})=>{

    const slug = params.slug;

    return (
        <main className='flex'>
            <ServerList/>
            <FriendsList active={slug}/>
            {
                slug === 'nitro'?<Nitro/>:
                    slug === 'shop'?<Shop/>:""
            }
        </main>
    );
}

export default MiddleComponent;
