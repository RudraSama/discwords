"use client"

import SidePanel from '../../../components/SidePanel';
import Channels from './Channels';

const Layout = ({children, params})=>{

    //first index of array is server Id
    const server_id = params.slug[0];
    const channel_id = params.slug[1];

    return (
        <>
            <SidePanel>
                <Channels serverId={server_id} channelId={channel_id}/>
            </SidePanel>
            {children} 
        </>
    );
}

export default Layout;
