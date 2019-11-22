import {setConfig, StorageHelper} from 'reactive-boilerplate-common'
import LocalStorageHelper from './localStorageHelper'

var localStorageHelper = new LocalStorageHelper()
StorageHelper.init(localStorageHelper)


var baseURL = process.env.REACT_APP_BASEURL;

setConfig({
    baseUrl:baseURL,
    env: 'dev'
});

export * from 'reactive-boilerplate-common'



 