import apiLoginRequestModal from '../modals/api-modals/loginRequestModal'
import appLoginResponseModal from '../modals/app-modals/loginResponseModal'


export default class AuthMapper{
    static password="";
    static username="";
    static token="";
    
    static mapAppRequestLoginToApiRequestLogin= (appLoginRequestModal)=>{
        
        var apiModal= new apiLoginRequestModal();
        apiModal.username = appLoginRequestModal.username;
        apiModal.password= appLoginRequestModal.password;
        apiModal.rememberMe = appLoginRequestModal.rememberMe;
        this.password = appLoginRequestModal.password;
        this.username = apiLoginRequestModal.username;
        return apiModal;
    }

    static mapApiResponseLoginToAppResponseLogin= (apiLoginResponseModal)=>{

        var appModal= new appLoginResponseModal();
        appModal.username = apiLoginResponseModal.userName;
        appModal.token= apiLoginResponseModal.token;
       
       
        return appModal;
    }





}