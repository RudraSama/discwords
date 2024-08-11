import React from "react";

const AcitveFriendsPage = () => {

    return (
        <div className="w-full">
            <NavBar/>
            <FriendListContainer/>
        </div>
    )
}

const NavBar = () =>{

    return (
        <div className="h-14 p-4 bg-gray-bg-700  text-gray-bg-500 flex gap-4 border-b-2 border-gray-bg-800">
            <span className="text-white"><i className=" mx-3 fas fa-users text-gray-bg-500 text-xl w-6"/>Friends</span>
            <div className="w-[1px] bg-gray-bg-600 h-6"></div>
            <div className="flex gap-6 [&>button]:rounded-md hover:[&>button]:bg-gray-bg-600 hover:[&>button]:text-white [&>button]:px-2 [&>button]:text-md">
                <button>online</button>
                <button>All</button>
                <button>Pending</button>
                <button>Blocked</button>
                <button className="bg-green-700 hover:!bg-green-600 text-white">Add Friend</button>
            </div>
            <div className="flex gap-6 ml-auto hover:[&>button>i]:text-white [&>button]:px-1 [&>button]:py-0.5  [&>button]:text-md">
                <button><i className="fas fa-message text-xl text-gray-bg-500"/></button>
                <div className="w-0.5 bg-gray-bg-600 h-6 mx-"></div>
                <button><i className="fas fa-inbox text-xl text-gray-bg-500 "/></button>
                <button><i className="fas fa-question text-xl text-gray-bg-500"/></button>
            </div>
        </div>
    )
}

const FriendListContainer = () =>{
    return (
        <div className="bg-gray-bg-700 h-[calc(100vh-56px)] flex">
            <div className="w-full border-r-[1px] border-gray-bg-600 h-full py-4 px-6 flex flex-col gap-6">
                <div className="relative h-auto flex bg-gray-bg-900 items-center text-sm rounded-md">
                    <input className="p-2 w-full bg-transparent outline-none" placeholder="Search"/>
                    <i className="absolute right-2 fas fa-search text-xl text-gray-bg-500"/>
                </div>
                <div>
                    <span className="text-sm text-gray-bg-500">Online - 1</span>
                    <hr className="border-[1px] border-gray-bg-600 my-4"/>
                </div>
            </div>
            <div className="w-[500px] py-6 px-4 flex flex-col gap-8">
                <span className="text-xl font-bold text-white">ACTIVE NOW</span>
                <div className="flex justify-center">
                    <span className="font-bold text-sm text-white">It's quite for now...</span>
                    <span>

                    </span>
                </div>
            </div>
        </div>
    )
}

export default AcitveFriendsPage;