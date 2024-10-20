import SidePanel from '../../../components/SidePanel';
import Channels from './Channels';

const Layout = ({children})=>{
    return (
        <>
            <SidePanel>
                <Channels />
            </SidePanel>
            {children} 
        </>
    );
}

export default Layout;
