export default class LocalStorageHelper {

    storeCredentials = async (username,password,token) => {
        return this.SetGenericPassword(username, password,token);
    }


    getCredentials =  async () => {
        try {
              return {
                username:window.localStorage.getItem('username'),
                password:window.localStorage.getItem('password'),
                token:window.localStorage.getItem('token')
                };
            } 
           catch (error) {
            console.log('Error occured', error);
          }

        }
    
    SetGenericPassword =async (username, password, token)=>{
        try{
           window.localStorage.setItem('username', username);
           window.localStorage.setItem('password', password);
           window.localStorage.setItem('token', token);
       }
        catch(err){
           console.log("error in setting local storage for web "+ err)
        }
        
    }
    
}
