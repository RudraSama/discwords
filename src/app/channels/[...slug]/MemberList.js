"use client";

import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {axiosConfig} from './../../../lib/utils';
import UserIcon from './../../../components/UserIcon';

const MemberList = ()=>{

    const {user} = useSelector((state)=>state.user);
    const axios = axiosConfig(user);

    const [members, setMembers] = useState([]);

    useEffect(()=>{
        axios.get(`http://localhost:8080/api/getMembers/${1}`).then(res=>{
            if(res.data){
                setMembers(res.data);
            }
        });
    }, []);

    return (
        <div className="w-[230px] bg-gray-bg-800" >
            <div className="flex flex-col mt-10">
                {
                    members.map((member, index)=>{
                       return( <UserIcon key={index} username={member.username} icon_url={member.pictureUrl === ""?"/batman.jpeg":member.pictureUrl} online={false}/> )
                    })
                }
           </div>
        </div>
    );
}

export default MemberList;
