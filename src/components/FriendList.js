
import React from "react";
import Link from 'next/link';
import UserIcon from "@/components/UserIcon";

const FriendsList = (props) =>{
    
    return(
        <div className="h-screen w-[250px] bg-gray-bg-800">
            <SearchBar/>

            <ul className="[&>li]:w-[236px] [&>li]:my-[2px] [&>li]:mx-[6px]">
                <li>
                    <Friends active={props.active?false:true}/>
                </li>
                <li>
                    <Nitro active={props.active === 'nitro'}/>
                </li>
                <li>
                    <Shop active={props.active === 'shop'}/>
                </li>
            </ul>

            <div className="w-full py-2 px-6 text-gray-bg-500 flex justify-between">
                <span>Direct Messages</span>
                <button><i className="fas fa-plus text-md"/></button>
            </div>

            <ul className="[&>li]:w-[236px] [&>li]:my-[2px] [&>li]:mx-[6px]">
                <li>
                    <UserIcon username="Cattttt" icon_url={"/icon-cat.png"} online={true}/>
                </li>
                <li>
                    <UserIcon username="IamBatman" icon_url={"/batman.jpeg"} online={true}/>
                </li>
            </ul>
        </div>
    )

}

const SearchBar = () =>{

    return(
        <div className="border-b-2 border-[#202124] p-3">
            <input className="p-[5px] w-full text-sm rounded-[5px] bg-gray-bg-900" placeholder="Find or start a conversation"/>
        </div>
    )
}

const Friends = (props) => {
    
    return (
        <Link href="/channels/me">
            <div className={"w-auto h-8 px-2 py-5 flex items-center rounded-md hover:bg-[#36373D] hover:text-white " + (props.active?"text-white bg-gray-bg-600":"text-gray-bg-500")}> <i className=" mx-3 fas fa-users text-xl w-10"/> Friends</div>
        </Link>
    )
}
const Nitro = (props) => {
    
    return (
        <Link href="/nitro">
            <div className={"w-auto h-8 px-2 py-5 flex items-center rounded-md hover:bg-[#36373D] hover:text-white " + (props.active?"text-white bg-gray-bg-600":"text-gray-bg-500")}> <i className=" mx-3 fas fa-car text-xl w-10 text-[22px]"/> Nitro</div>
        </Link>
    )
}
const Shop = (props) => {

    return (
        <Link href="/shop">
            <div className={"w-auto h-8 px-2 py-5 flex items-center rounded-md hover:bg-[#36373D] hover:text-white " + (props.active?"text-white bg-gray-bg-600":"text-gray-bg-500")}> <i className=" mx-3 fas fa-shop text-xl  w-10"/> Shop</div>
        </Link>
    )
}

export default FriendsList;
