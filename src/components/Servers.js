"use client"

import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import {useSelector} from 'react-redux';
import {axiosConfig} from './../lib/utils';
import {useRouter} from 'next/navigation';

const Servers = () =>{
    
    const {user} = useSelector((state)=>state.user);
    const axios = axiosConfig(user);

    const [servers, setServers] = useState([]);


    useEffect(()=>{
        axios.get("http://localhost:8080/api/getServers").then(res=>{
            if(res.data){
                setServers(res.data);
            }
        });
    },[]);

    return(
        <div className="w-18 h-screen bg-[#1e1f22] flex flex-col px-3">
            
            <ServerIcon active={true} type="dm"/>
            <hr className="border-gray-bg-800 border-[1px] w-[32px] mx-auto rounded-md"/>
            {servers.map((server, index)=>{
                return (<ServerIcon active={false} serverId={server.server_id} key={index}/>)
            })}
            <hr className="border-gray-bg-800 border-[1px] w-[32px] mx-auto rounded-md"/>
            <AddNewServer/>
            
        </div>
    );
}

const ServerIcon = (props) => {

    const router = useRouter();
    const activeClass = "h-2 w-1 bg-white rounded-[30%] transition-all group-hover:h-5";

    return (
        <div id="server" className="my-2 relative flex items-center group" onClick={()=>{router.push("/channels/"+props.serverId)}}>
            <span id="activeServer" className={props.active?activeClass:""}></span>

            <div className=" w-full hover:transition-all">
                <Image src={props.type==='dm'?'/dm.jpg':'/discord_server.webp'} className={"rounded-[100%] mx-auto transition-all group-hover:rounded-[30%] hover:cursor-pointer"} width={48} height={48} alt="server pic" />
            </div>
        </div>
    )
}

const AddNewServer = () =>{

    const handleAddNewServer = () =>{console.log("Adding new server")}

    return(
        <div className="flex justify-center hover:cursor-pointer">
            <div onClick={handleAddNewServer} className="group h-12 w-12 my-2 flex justify-center bg-[#313338] items-center rounded-[100%] transition-all duration-150 ease-in-out hover:rounded-[30%] hover:bg-green-700 ">
                <span className="text-green-500 text-2xl group-hover:text-white transition-all"><i className="fa-solid fa-plus" aria-hidden></i></span>
            </div>
        </div>
    )
}


export default Servers;
