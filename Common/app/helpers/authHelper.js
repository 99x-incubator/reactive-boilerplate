import apiHelper from './apiHelper'
import authMapper from '../mappers/authMapper'

export default class AuthHelper{

    static loginRequest = async(loginModal) => {
        var response = await apiHelper.post('login', authMapper.mapAppRequestLoginToApiRequestLogin(loginModal)); 
        if(response && !response.error){
            return authMapper.mapApiResponseLoginToAppResponseLogin(response)
        }else{
            return response;
        }
    }
}