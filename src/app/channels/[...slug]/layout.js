"use client"

import SidePanel from '../../../components/SidePanel';
import Channels from './Channels';

const Layout = ({children, params})=>{

    //first index of array is server Id
    const slug = params.slug[0];

    return (
        <>
            <SidePanel>
                <Channels serverId={slug}/>
            </SidePanel>
            {children} 
        </>
    );
}

export default Layout;
