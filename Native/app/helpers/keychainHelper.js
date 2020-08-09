import * as Keychain from 'react-native-keychain';

export default class KeychainHelper {

    storeCredentials = async (username,token) => {
        return Keychain.setGenericPassword(username, token);
    }

    getCredentials = async()=>{
        try {
            const credentials = await Keychain.getGenericPassword();
            if (credentials) {
              return {
                username: credentials.username,
                token: credentials.password
                };
            } else {
              return {error:true, error_msg: 'No credentials stored'};
            }
          } catch (error) {
            return {error:true, error_msg: 'Keychain couldn\'t be accessed!'};
          }
    }
}