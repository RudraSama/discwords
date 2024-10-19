import axios from 'axios';
import Cookies from 'js-cookie';

const FormatDate = {
    getFormatTimestamp: (date)=>{
        const d = new Date(date);
        
        let timestamp = "";
        timestamp += d.getDate()+"/";
        timestamp += d.getMonth()+"/";
        timestamp += d.getFullYear()+" ";
        
        timestamp += d.getHours()+":";
        timestamp += d.getMinutes();

        return timestamp;
        
    }
}


const axiosConfig = (user)=>{
    
    const instance = axios.create();
    instance.defaults.headers.common['x-access-token'] = Cookies.get("token");
    instance.defaults.headers.common['userId'] = user?.userId; 
    instance.defaults.headers.common['profileId'] = user?.profileId; 
    return instance;
}


module.exports = {FormatDate, axiosConfig};
