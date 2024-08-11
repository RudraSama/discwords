import Image from "next/image";
import React from "react";

const ServerPic = (props) => {
    const activeClass = "h-2 w-1 bg-white rounded-[30%] transition-all group-hover:h-5";

    return (
        <div id="server" className="my-2 relative flex items-center group">
            <span id="activeServer" className={props.active?activeClass:""}></span>

            <div className=" w-full hover:transition-all">
                <Image src={'/discord_server.webp'} className="rounded-[100%] mx-auto transition-all group-hover:rounded-[30%] hover:cursor-pointer" width={48} height={48} alt="server pic" />
            </div>
        </div>
    )
}

export default ServerPic;
