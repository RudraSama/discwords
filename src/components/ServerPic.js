import Image from "next/image";
import React from "react";

const ServerPic = (props) => {

    return (
        <div id="server" className="my-2 relative flex items-center">
            <span id="activeServer" className={props.active?"serverPicActive":""}></span>

            <div className=" w-full hover:transition-all">
                <Image src={'/discord_server.webp'} className="serverPicTransition" width={48} height={48}/>
            </div>
        </div>
    )
}

export default ServerPic;