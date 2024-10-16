import React from "react"
import ServerPic from "./ServerPic";

const Servers = () =>{
    return(
        <div className="w-18 h-screen bg-[#1e1f22] flex flex-col px-3">
            
            <ServerPic active={true} type="dm"/>
            <hr className="border-gray-bg-800 border-[1px] w-[32px] mx-auto rounded-md"/>
            <ServerPic active={false}/>
            <ServerPic active ={false}/>
            <ServerPic active ={false}/>
            <ServerPic active ={false}/>
            <ServerPic active ={false}/>
            <hr className="border-gray-bg-800 border-[1px] w-[32px] mx-auto rounded-md"/>
            <AddNewServer/>
            
        </div>
    );
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
