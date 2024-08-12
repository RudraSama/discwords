import Image from "next/image";

const UserIcon = (props)=>{
    return (
        <div className="flex items-center px-2 py-1.5 rounded-md text-gray-bg-500 hover:bg-[#36373D] hover:text-white ">
            <div className="relative w-fit ml-2 mr-6">
                <div className="w-[32px] h-[32px] rounded-full overflow-hidden">
                    <Image src={props.icon_url} alt="this is cat user" width={100} height={100}/>
                </div>
                <div className="absolute top-5 right-0 h-4 w-4 bg-gray-bg-800 rounded-full flex justify-center items-center">
                    <div className={"h-2.5 w-2.5 rounded-full flex justify-center items-center " + (props.online?"bg-green-600":"bg-gray-bg-500 ")}>
                        <div className={"h-1 w-1 rounded-full bg-gray-bg-800 " + (props.online?"hidden":"")}>
                        </div>
                    </div>
                </div>
            </div>
                {props.username}
        </div>
    );
}

export default UserIcon;
