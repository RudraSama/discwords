import React from "react"
import ServerPic from "./ServerPic";

const ServerList = () =>{
    return(
        <div className="w-16 h-screen bg-slate-700 flex flex-col ">
            
            <ServerPic active={true}/>
            <ServerPic active ={false}/>
            <ServerPic active ={false}/>
            <ServerPic active ={false}/>
            <ServerPic active ={true}/>
            <AddNewServer/>
            
        </div>
    );
}

const AddNewServer = () =>{

    const handleAddNewServer = () =>{console.log("Adding new server")}

    return(
        <>
            <div onClick={handleAddNewServer} className=" my-2 h-10 w-10 self-center bg-gray-800 flex justify-center items-center rounded-full hover:cursor-pointer">
                <span className="text-green-600 text-2xl">+</span>
            </div>
        </>
    )
}


export default ServerList;