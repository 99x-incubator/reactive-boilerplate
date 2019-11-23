import apiLoginRequestModal from '../modals/api-modals/loginRequestModal'
import appLoginResponseModal from '../modals/app-modals/loginResponseModal'


export default class AuthMapper {
    
    static mapAppRequestLoginToApiRequestLogin= (appLoginRequestModal)=> {
        
        var apiModal= new apiLoginRequestModal();
        apiModal.username = appLoginRequestModal.username;
        apiModal.password= appLoginRequestModal.password;
        apiModal.rememberMe = appLoginRequestModal.rememberMe;

        return apiModal;
    }

    static mapApiResponseLoginToAppResponseLogin= (apiLoginResponseModal)=> {
        var appModal= new appLoginResponseModal();
        appModal.username = apiLoginResponseModal.username;
        appModal.token= apiLoginResponseModal.token;

        return appModal;
    }





}