"use server"

import {useSession} from 'next-auth/react';

const Test = ()=>{

    const {data: session} = useSession();

    return (
        <div>
        </div>
    );
}

export default Test;
