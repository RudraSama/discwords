"use client"

import Link from 'next/link';

const Channels = ()=>{
    return (
        <>
            <div className=" text-white border-b-2 border-b-gray-bg-900 h-14 p-4 text-base flex justify-between hover:bg-gray-bg-600 transition-all">
                <span>Server Name🤖🤖</span>
                <button><i className="fas fa-angle-down text-md"/></button>
            </div>
            <div className="text-gray-bg-500 h-14 p-2 text-[15px] flex gap ">

                <Link className="w-full flex gap-2 px-2 py-4 rounded-md items-center hover:bg-gray-bg-600 transition-all hover:text-white " href={"/events"}><i className="fas fa-calendar text-md"/>Events</Link>
            </div>
            <div className="w-[230px] bg-gray-bg-600 h-[2px] rounded-md self-center"></div>
            <div className="text-gray-bg-500 p-4">
                <button className="flex gap-3 items-center "><i className="fas fa-angle-down text-sm"/>text channels</button>
                <div className="flex text-[16px]">
                    <Link href={"#"} className=" w-full flex justify-between rounded-md px-2 py-1 hover:bg-gray-bg-600 transition-all hover:text-white">
                        <span><i className="fas fa-hashtag text-xl mx-2"/>general</span>
                        <div className="flex">
                            <butotn><i className="fas fa-users text-sm mx-2"/></butotn>
                            <butotn><i className="fas fa-gear text-sm"/></butotn>
                        </div>
                    </Link>
                    
                </div>
            </div>
            <div className="text-gray-bg-500 p-4">
                <button className="flex gap-3 items-center "><i className="fas fa-angle-down text-sm"/>voice channels</button>
            </div>
        </>
    );
}

export default Channels;
