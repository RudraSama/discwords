import React from "react";

const FriendsList = () =>{

    return(
        <div className="h-screen w-[250px] bg-[#2b2d31]">
            <SearchBar/>
            <Friends/>
            <Nitro/>
            <Shop/>
        </div>
    )

}

const SearchBar = () =>{
    return(
        <div className="border-b-2 border-[#202124] p-3">
            <input className="p-[5px] w-full text-sm rounded-[5px] bg-[#1e1f22]" placeholder="Find or start a conversation"/>
        </div>
    )
}

const Friends = () => {
    return (
        <div className="p-3 w-auto">
            <div className="w-auto h-8 px-2 py-5 flex items-center rounded-md hover:bg-[#404249] text-[#dbdee1]"> <i className=" mx-3 fas fa-users text-xl mr-2 text-[#dbdee1]"/> Friends</div>
        </div>
    )
}
const Nitro = () => {
    return (
        <div className="p-3 w-auto">
            <div className="w-auto h-8 px-2 py-5 flex items-center rounded-md hover:bg-[#404249] text-[#dbdee1]"> <i className=" mx-3 fas fa-car text-xl mr-2 text-[#dbdee1]"/> Nitro</div>
        </div>
    )
}
const Shop = () => {
    return (
        <div className="p-3 w-auto">
            <div className="w-auto h-8 px-2 py-5 flex items-center rounded-md hover:bg-[#404249] text-[#dbdee1]"> <i className=" mx-3 fas fa-shop text-xl mr-2 text-[#dbdee1]"/> Shop</div>
        </div>
    )
}

export default FriendsList;
