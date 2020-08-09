import {LOGIN_REQUEST, LOGIN_RESPONSE,LOGIN_RESPONSE_FAIL} from '../actions/auth'
import loginResponseAppModal from '../modals/app-modals/loginResponseModal'

const initialState={
    loading:false,
    login: new loginResponseAppModal(),
    error: false,
    errorMessage: ''  ,
    isAuthenticated:false,
}

export default ( state = initialState, {type,action})=>{
    switch(type){
        case LOGIN_REQUEST:
            return {...initialState,loading:true}
        case LOGIN_RESPONSE:
            return {...state,loading:false,login:action.login,isAuthenticated:true}
        case LOGIN_RESPONSE_FAIL:
            return {...state,loading:false,error:action.error, errorMessage:action.errorMessage,isAuthenticated:false}
        default:
            return state
    }

}
