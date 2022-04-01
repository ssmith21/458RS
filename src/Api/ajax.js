// can send ajax request ,return promise
import axios from 'axios'

export default function ajax(url,data={},type='GET'){
    if(type==='GET'){
        // request parameter
        let paramStr =''
        Object.keys(data).forEach(key=>{
            paramStr +=key+'='+data[key]+'&'
        })
        if(paramStr){
            paramStr.substring(0,paramStr.length-1)
        }
        // use axios to send GET request
        return axios.get(url+'?'+paramStr)
    }else{
        return  axios.post(url,data)
    }
}



