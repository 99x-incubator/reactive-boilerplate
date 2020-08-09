export const LOGIN_REQUEST ='LOGIN_REQUEST'
export const LOGIN_RESPONSE ='LOGIN_RESPONSE'
export const LOGIN_RESPONSE_FAIL ='LOGIN_RESPONSE_FAIL'


export const loginRequest = (loginModal)=>({

    type:LOGIN_REQUEST,
    action:loginModal,
    
})
