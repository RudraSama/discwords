import React from "react";

const FriendsList = () =>{

    return(
        <div className="h-screen w-[250px] bg-gray-bg-800">
            <SearchBar/>

            <ul className="[&>li]:w-[248px]">
                <li>
                    <Friends active={true}/>
                </li>
                <li>
                    <Nitro active={false}/>
                </li>
                <li>
                    <Shop active={false}/>
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
        <div className="px-2 py-0.5 w-auto">
            <div className="w-auto h-8 px-2 py-5 flex items-center rounded-md hover:bg-[#404249] text-gray-bg-500"> <i className=" mx-3 fas fa-users text-xl  w-10"/> Friends</div>
        </div>
    )
}
const Nitro = (props) => {
    return (
        <div className="px-2 py-0.5 w-auto">
            <div className="w-auto h-8 px-2 py-5 flex items-center rounded-md hover:bg-[#404249] text-gray-bg-500"> <i className=" mx-3 fas fa-car text-xl w-10 text-[22px]"/> Nitro</div>
        </div>
    )
}
const Shop = (props) => {
    return (
        <div className="px-2 py-0.5 w-auto">
            <div className="w-auto h-8 px-2 py-5 flex items-center rounded-md hover:bg-[#404249] text-gray-bg-500"> <i className=" mx-3 fas fa-shop text-xl  w-10"/> Shop</div>
        </div>
    )
}

export default FriendsList;
