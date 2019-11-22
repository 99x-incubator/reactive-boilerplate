import * as Keychain from 'react-native-keychain';

export default class KeychainHelper {

    storeCredentials = async (username,password) => {

        return Keychain.setGenericPassword(username, password);
    }

    getCredentials = async()=>{
        try {
            const credentials = await Keychain.getGenericPassword();
            if (credentials) {
              return {
                username: credentials.username,
                password: credentials.password
                };
            } else {
              return {error:true, error_msg: 'No credentials stored'};
            }
          } catch (error) {
            return {error:true, error_msg: 'Keychain couldn\'t be accessed!'};
          }
    }
}