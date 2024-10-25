"use client"

import {useState, useEffect} from 'react';
import Link from 'next/link';
import {useSelector} from 'react-redux';
import {axiosConfig} from './../../../lib/utils';

const Channels = (props)=>{
    
    const {user} = useSelector((state)=>state.user);
    const axios = axiosConfig(user);
    
    const [server, setServer] = useState({});
    const [channels, setChannels] = useState([]);


    useEffect(()=>{

        axios.get(`http://localhost:8080/api/getServer/${props.serverId}`).then(res=>{
            if(res.data){
                setServer(res.data);
            }
        });

        axios.get(`http://localhost:8080/api/getChannels/${props.serverId}`).then(res=>{
            if(res.data){
                setChannels(res.data);
            }
        });

    }, []);

    return (
        <>
            <div className=" text-white border-b-2 border-b-gray-bg-900 h-14 p-4 text-base flex justify-between hover:bg-gray-bg-600 transition-all">
                <span>{server?.server_name}</span>
                <button><i className="fas fa-angle-down text-md"/></button>
            </div>
            <div className="text-gray-bg-500 h-14 p-2 text-[15px] flex gap ">

                <Link className="w-full flex gap-2 px-2 py-4 rounded-md items-center hover:bg-gray-bg-600 transition-all hover:text-white " href={"/events"}><i className="fas fa-calendar text-md"/>Events</Link>
            </div>
            <div className="w-[230px] bg-gray-bg-600 h-[2px] rounded-md self-center"></div>
            <div className="text-gray-bg-500 p-4">
                <button className="flex gap-3 items-center "><i className="fas fa-angle-down text-sm"/>text channels</button>
                <div className="flex text-[16px]">
                    {channels.map((channel, index)=>{
                        return (channel.channel_type === "TEXT"?<Channel serverId={props.serverId} channel_name={channel.channel_name} channel_id={channel.channel_id} key={index}/>:"")
                    })} 
                </div>
            </div>
            <div className="text-gray-bg-500 p-4">
                <button className="flex gap-3 items-center "><i className="fas fa-angle-down text-sm"/>voice channels</button>
                <div className="flex text-[16px]">
                    {channels.map((channel, index)=>{
                        return (channel.channel_type === "VOICE"?<Channel serverId={props.serverId} channel_name={channel.channel_name} channel_id={channel.channel_id} key={index}/>:"")
                    })} 
                </div>
            </div>
        </>
    );
}


const Channel = (props)=>{
    return (
        <Link href={`/channels/${props.serverId}/${props.channel_id}`} className=" w-full flex justify-between rounded-md px-2 py-1 hover:bg-gray-bg-600 transition-all hover:text-white">
            <span><i className="fas fa-hashtag text-xl mx-2"/>{props.channel_name}</span>
            <div className="flex">
                <button><i className="fas fa-users text-sm mx-2"/></button>
                <button><i className="fas fa-gear text-sm"/></button>
            </div>
        </Link>
    );
}

export default Channels;
