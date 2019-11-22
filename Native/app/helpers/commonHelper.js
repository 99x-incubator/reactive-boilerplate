
import {setConfig, StorageHelper} from 'reactive-boilerplate-common';
import config from '../helpers/configHelper';
import KeychainHelper from '../helpers/keychainHelper';

var keychain = new KeychainHelper();
StorageHelper.init(keychain);

setConfig({
    baseUrl:config.baseUrl,
    env:config.env
});

export * from 'reactive-boilerplate-common';
 