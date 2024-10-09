"use client"
import {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Image from 'next/image';

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
            <div className="w-full border-r-[1px] border-gray-bg-600 py-4 px-8 flex flex-col">
              
                {props.type === "all"?
                        <AllFriends/>:
                        props.type === "online"?
                        <OnlineFriends/>:
                        props.type === "pending"?
                        <PendingRequests/>:
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

const OnlineFriends = ()=>{
    return (
        <div>
        </div>
    );
}

const AllFriends = ()=>{
    return (
        <div>
        </div>
    );
}


const PendingRequests = () =>{

    const [friendRequests, setFriendRequests] = useState([]);

    const {user} = useSelector((state)=>state.user);

    
    useEffect(()=>{

        axios.get(`http://localhost:8080/api/fetchFriendRequests/${user.profileId}`).then(res=>{
            setFriendRequests(res.data);
        });


    },[]);

    return (
        <div className="flex flex-col gap-2">
            {friendRequests.map((request, index)=>{
                return (
                    <div className="flex gap-4 p-2 hover:bg-gray-bg-600 hover:rounded-xl" key={index}>
                        <div className="w-11 h-11 rounded-full overflow-hidden">
                          <Image src={request.picture_url === ""?"/batman.jpeg": request.picture_url} alt="this is cat user" width={100} height={100}/>
                        </div>

                        <div className="gap-4">
                            <span className="flex gap-3 text-base items-end text-white font-bold leading-5 mb-1">
                                {request.username}
                            </span>
                            <span className="text-gray-400">
                                Incoming Friend request
                            </span>
                        </div>

                        <div className="flex gap-2 ml-auto my-auto">
                            <div className="bg-gray-bg-900 rounded-full py-2 px-2.5">
                                <i className="fa-solid fa-check fa-xl text-gray-400" />
                            </div>
                            <div className="bg-gray-bg-900 rounded-full py-2 px-2.5">
                                <i className="fa-solid fa-xmark fa-xl text-gray-400" />
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}


const AddFriend = ()=>{

    const [friendUsername, setFrienddUsername] = useState("");

    const [response, setResponse] = useState("");

    const handleUsernameChange = (event)=>{
        setFrienddUsername(event.target.value);
    }

    const {user} = useSelector((state)=> state.user);

    const handleFriendRequest = async() =>{

        const res = await axios.post("http://localhost:8080/api/addFriend", {
            //in future instead of profile id  send web token to keep it secure
            profile_id: user.profileId,
            username: friendUsername,
        });
        setResponse(res.data);
    }

    return (
        <div className="my-4 w-full flex flex-col">
              <p className="text-white font-bold">ADD FRIEND</p>
              <p className="text-gray-bg-500 my-3">You can add friends with their Discord usernames</p>
            <div className="flex w-full p-3 rounded-lg border-[1px] border-gray-bg-700 bg-gray-bg-900 justify-between focus-within:border-[1px] focus-within:border-cyan-400">
                <input className="flex-[85%] bg-gray-bg-900 outline-none text-white" placeholder="Enter username" onChange={handleUsernameChange}/>
                <button onClick={handleFriendRequest} className="flex-[15%] p-1 text-gray-bg-500 bg-indigo-800 rounded-md">Send Request</button>
            </div>
            <p className="text-green-700 p-2">{response}</p>
            <hr className="h-[2px] my-5 border-gray-bg-600 w-[105%] self-center"/>
        </div>
    );
}
export default Me;
