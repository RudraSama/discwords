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


module.exports = {FormatDate};
