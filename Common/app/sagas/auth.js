import { LOGIN_REQUEST,LOGIN_RESPONSE,LOGIN_RESPONSE_FAIL } from '../actions/auth'
import { call, put, takeLatest } from 'redux-saga/effects'
import authHelper from '../helpers/authHelper'
import StorageHelper from '../helpers/storageHelper'

function* login(action){ 
    try{
        const response = yield call(authHelper.loginRequest,action.action)
        if(response && !response.error && response.token && response.username){        
            var storageHelper = StorageHelper.getInstance();
            yield call(storageHelper.store, response.username, response.token);
            //test code to retrive credentials
            var credentials = yield calls(storageHelper.get);

            yield put({type:LOGIN_RESPONSE,action:{login:response}});
        }else{
            yield put({type:LOGIN_RESPONSE_FAIL, action:{error: response.error, errorMessage:response.errorMessage }});
        }
    }
    catch(err){
        yield put({type:LOGIN_RESPONSE_FAIL, action:{error:err.error, errorMessage:action.errorMessage }});
    }
}

export function* loginSaga(){
    yield takeLatest(LOGIN_REQUEST,login)
} 





