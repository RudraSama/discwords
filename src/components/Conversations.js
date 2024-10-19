
import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import UserIcon from './UserIcon';
import {useSelector} from 'react-redux';
import {useRouter} from 'next/navigation'
import {axiosConfig} from '../lib/utils';

const Conversations = (props) =>{

    const {user} = useSelector((state)=>state.user);
    const axios = axiosConfig(user);
    const [conversations, setConversations] = useState([]);
    const [createConvBox, setCreateConvBox] = useState(false);

    const toggleCreateConvBox = () => {
        setCreateConvBox(!createConvBox);
    }

    useEffect(()=>{
        
        axios.get(`http://localhost:8080/api/fetchConversations`).then(res=>{
            if(res.data){
                setConversations(res.data);
            }
        });
    },[]);



    return(
        <div className="h-screen w-[250px] bg-gray-bg-800 p-3">
            <SearchBar/>
            <hr className="mt-3 border border-gray-bg-900"/>
            <ul className="my-2 [&>li]:w-[236px] [&>li]:my-[2px] [&>li]:mx-[px]">
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

            <div className="relative w-full py-2 px-6 text-gray-bg-500 flex justify-between">
                <span>Direct Messages</span>
                <button onClick={toggleCreateConvBox}><i className="fas fa-plus text-md"/></button>
                {createConvBox?<div onClick={toggleCreateConvBox} className="fixed w-screen h-screen bg-transparent z-[5] top-0 left-0"></div>:""}
                {createConvBox?<CreateConversation/>:""}
            </div>

            <ul className="[&>li]:w-[236px] [&>li]:my-[2px] [&>li]:mx-[6px]">

                {conversations.map((conv, index)=>{
                    return (
                        <li key={index} className="cursor-pointer">
                            <Link href={"/channels/me/"+conv.conversation_id}>
                                <UserIcon username={conv.friend_profile.username} icon_url={conv.friend_profile.pictureUrl=== ""?"/batman.jpeg":conv.friend_profile.pictureUrl} online={true}/>
                            </Link>
                        </li>
                    )

                })}

            </ul>
        </div>
    );

}

const CreateConversation = ()=>{

    const {user} = useSelector((state)=>state.user);
    const axios = axiosConfig(user);
    const route = useRouter();
    const [allFriends, setAllFriends] = useState([]);
    const [friends, setFriends] = useState([]);

    const selectedFriends = [];

    const searchFriends = (value)=>{
        const regx = new RegExp(value+".", "i");
        
        const b = allFriends.filter((friend)=>{
            return regx.test(friend.username) || value === friend.username;
        });

        setFriends(b);
    }


    useEffect(()=>{
        axios.get(`http://localhost:8080/api/fetchFriends`).then(res=>{
            if(res.data){
                setAllFriends(res.data);
                setFriends(res.data);
            }
        });
    }, []);

    const createDM = ()=>{

        axios.post("http://localhost:8080/api/createConversation", {
            profile_id1: selectedFriends[0].profileId
        }).then(res=>{
            if(res.data){
                if(res.data.conversation_id){
                    route.push(`/channels/me/${res.data.conversation_id}`);
                }
            }
        });
    }

 

    return (
        <div className="absolute z-10 right-0 translate-x-full w-[400px] bg-gray-bg-700 shadow-xl border-[1px] border-gray-bg-900 p-3">
            <span className="text-white text-lg">Select Friends</span><br/>
            <span>Group DMs not supported yet</span>
            <div className="mt-3">
                <SearchBar callback={searchFriends} />
                <hr className="mt-3 border-gray-bg-600"/>
                <ul className="h-[200px] overflow-y-scroll">
                    {
                        friends.map((friend, index)=>{
                            return (
                                <li key={index}>
                                    <SelectFriend user={friend} selectedFriends={selectedFriends} />
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <hr className="border-gray-bg-600"/>
            <div className="flex justify-center pt-4">
                <button className="bg-indigo-500 text-white w-full p-2 rounded-md hover:bg-indigo-600" onClick={createDM}>Create DM</button>
            </div>
        </div>
    );
}

const SelectFriend = (props) => {

    const [selected, setSelected] = useState(false);

    const toggleCheckBox = ()=>{
        setSelected(!selected);
    }

    const deleteElement = (array, user)=>{
        array.map((ele, index)=>{
            if(ele.username === user.username){
                array.splice(index, 1);
            }
        });
    }

    if(selected){
        props.selectedFriends.push(props.user);
    }
    else{
        deleteElement(props.selectedFriends, props.user);
    }

    return (
        <div className="flex justify-between items-center">
            <div className="flex items-center">
                <UserIcon username={props.user.username} online={true} icon_url={'/icon-cat.png'}/>
            </div>
            <div className="h-6 w-6 border-[1px] border-gray-400 rounded-lg flex justify-center items-center cursor-pointer" onClick={toggleCheckBox}>
                {selected?<span className="text-blue-400 text-xl">&#10003;</span>:""}
            </div>
        </div>
    )
}


const SearchBar = (props) =>{

    return(
        <div className="">
            <input onChange={(e)=>{props.callback(e.target.value)}} className="p-[5px] w-full text-sm rounded-[5px] bg-gray-bg-900" placeholder="Find or start a conversation"/>
        </div>
    )
}


const Friends = (props) => {
    
    return (
        <Link href="/channels/me">
            <div className={"w-[225px] h-8 py-5 flex items-center rounded-md hover:bg-[#36373D] hover:text-white " + (props.active?"text-white bg-gray-bg-600":"text-gray-bg-500")}> <i className=" mx-3 fas fa-users text-xl w-10"/> Friends</div>
        </Link>
    )
}
const Nitro = (props) => {
    
    return (
        <Link href="/nitro">
            <div className={"w-[225px] h-8 px-2 py-5 flex items-center rounded-md hover:bg-[#36373D] hover:text-white " + (props.active?"text-white bg-gray-bg-600":"text-gray-bg-500")}> <i className=" mx-3 fas fa-car text-xl w-10 text-[22px]"/> Nitro</div>
        </Link>
    )
}
const Shop = (props) => {

    return (
        <Link href="/shop">
            <div className={"w-[225px] h-8 px-2 py-5 flex items-center rounded-md hover:bg-[#36373D] hover:text-white " + (props.active?"text-white bg-gray-bg-600":"text-gray-bg-500")}> <i className=" mx-3 fas fa-shop text-xl  w-10"/> Shop</div>
        </Link>
    )
}

export default Conversations;
