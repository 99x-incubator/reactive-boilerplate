import {getConfig} from '../helpers/configHelper'

export default class ApiHelper{

static configbaseUrl;
static instance;

    static get = async(url) => {
        try {
          let response = await fetch(url);
          let responseJson = await response.json();
          return responseJson;
        } catch (error) {
          return {error:true, error_code:'SERVER_ERROR', errorMessage: 'SERVER_ERROR'};
        }
      }
    
    static post = async(url,body) => {
      try{
          var response =  await fetch(this.getUrl(url), {
          method: 'POST',
          headers: this.getHeaders() ,
          body: JSON.stringify(body),
        })
        var json = await response.json();
        if(!response.ok){
          return {error:true,error_code: json.Code, errorMessage: json.Message}
        }
        return json;
      }
      catch(err){
        return {error:true, error_code:'SERVER_ERROR', errorMessage: 'SERVER_ERROR'};
      }  
    };
    
    static put = async(url, body) => {
        try{
          const response =  await fetch(url, {
            method: 'PUT', 
            headers: this.getHeaders(),
            body: JSON.stringify(body) 
          });
          return await response.json(); 
        }        
        catch(err){
          return {error:true, error_code:'SERVER_ERROR', errorMessage: 'SERVER_ERROR'};
        }
    }

    static delete = async(url) => {
      try{
        const response =  await fetch(url, {
          method: 'DELETE', 
          headers: this.getHeaders(),
        });
        return await response.json(); 
      }        
      catch(err){
        return {error:true, error_code:'SERVER_ERROR', errorMessage: 'SERVER_ERROR'};
      }
  }
  
    static getHeaders = ()=>{
      return{
        'X-Api-Key': 'RkRWVUhlbHBkZXNr',
        'X-Api-Version': '1.0',
        'Content-Type':'application/json',
        'Access-Control-Allow-Origin':'*'
        }
    } 

    static getUrl = (url) => {
        return getConfig().baseUrl+url;    
    }    
}


  