import Image from "next/image";
import React from "react";

const ServerPic = (props) => {

    return (
        <div id="server" className="my-2 relative flex items-center group">
            <span id="activeServer" className={props.active?"serverPicActive":""}></span>

            <div className=" w-full hover:transition-all">
                <Image src={'/discord_server.webp'} className="rounded-[100%] mx-auto transition-all group-hover:rounded-[30%] hover:cursor-pointer" width={48} height={48}/>
            </div>
        </div>
    )
}

export default ServerPic;