"use client"
import {useState} from 'react';

const Me = ()=>{

    const [navOption, setNavOption] = useState("addFriend");

    const changeNavOption = (type)=>{
        setNavOption(type);
    }

    return (
        <div className="w-full">
            <NavBar changeNavOptionCallback={changeNavOption}/>
            <Activity type={navOption}/>
        </div>
    );
}

const NavBar = (props) =>{

    const changeNavOption = (type)=>{
        props.changeNavOptionCallback(type);
    }

    return (
        <div className="h-14 p-4 bg-gray-bg-700  text-gray-bg-500 flex gap-4 border-b-2 border-gray-bg-800">
            <span className="text-white"><i className=" mx-3 fas fa-users text-gray-bg-500 text-xl w-6"/>Friends</span>
            <div className="w-[1px] bg-gray-bg-600 h-6"></div>
            <div className="flex gap-6 [&>button]:rounded-md hover:[&>button]:bg-gray-bg-600 hover:[&>button]:text-white [&>button]:px-2 [&>button]:text-md">
                <button onClick={()=>{changeNavOption("online")}}>online</button>
                <button onClick={()=>{changeNavOption("all")}}>All</button>
                <button onClick={()=>{changeNavOption("pending")}}>Pending</button>
                <button onClick={()=>{changeNavOption("blocked")}}>Blocked</button>
                <button className="bg-green-700 hover:!bg-green-600 text-white" onClick={()=>{changeNavOption("addFriend")}}>Add Friend</button>
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

const Activity = (props) =>{
    return (
        <div className="bg-gray-bg-700 h-[calc(100vh-56px)] flex">
            <div className="w-full border-r-[1px] border-gray-bg-600 py-4 px-6 flex flex-col gap-6">
                {props.type === "all"?
                        <AllFriends/>:
                        props.type === "online"?
                        <OnlineFriends/>:
                        props.type === "pending"?
                        <div>Pending Requests</div>:
                        props.type === "blocked"?
                        <div>Blocked Requests</div>:
                        props.type === "addFriend"?
                        <AddFriend/>:""
                }
            </div>
            <div className="w-[500px] py-6 px-4 flex flex-col gap-8">
                <span className="text-xl font-bold text-white">Active Now</span>
                <div className="flex justify-center">
                    <span className="font-bold text-sm text-white">It's quite for now...</span>
                </div>
            </div>
        </div>
    )
}

const AllFriends = ()=>{
    return (
        <div>
        </div>
    );
}

const OnlineFriends = ()=>{
    return (
        <div>
        </div>
    );
}


const AddFriend = ()=>{
    return (
        <div>
            <input placeholder="Enter username"/>
        </div>
    );
}
export default Me;
