import * as Keychain from 'react-native-keychain';

export default class KeychainHelper {

    storeCredentials = async (username,password,token) => {

        return Keychain.setGenericPassword(username, password,token);
    }

    printCredentials = async()=>{
      try {
          const credentials = await Keychain.getGenericPassword();
          if (credentials) {
           
            console.log(credentials.username) 
            console.log(credentials.password) 
            console.log(credentials.token) 
            
          } else {
            console.log('No credentials stored');
          }
        } catch (error) {
          console.log('Keychain couldn\'t be accessed!', error);
        }
  }

    getCredentials = async()=>{
        try {
            const credentials = await Keychain.getGenericPassword();
            if (credentials) {
              return {
                username: credentials.username,
                password: credentials.password,
                token: credentials.token
                };
            } else {
              console.log('No credentials stored');
            }
          } catch (error) {
            console.log('Keychain couldn\'t be accessed!', error);
          }
    }
}