"use client"

import Conversations from './Conversations';
import SidePanel from '../../../components/SidePanel';

const Layout = ({children})=>{
    return (
        <>
            <SidePanel>
                <Conversations />
            </SidePanel>
            {children}
        </>
    );
}

export default Layout;
