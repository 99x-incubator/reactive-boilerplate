export default class StorageHelper{

    static instance;
        constructor(storage){
            this.storage = storage;
        }

    static init(storage){
        StorageHelper.instance= new StorageHelper(storage)
    }

    static getInstance(){
       
        if(!StorageHelper.instance){
            throw "Init should be called before getInstance"
        }
        return StorageHelper.instance;
    }

    get = async () => {
        switch(this.storage.constructor.name ){
            case "KeychainHelper": 
                return this.storage.getCredentials();
            case "LocalStorageHelper" :
                return this.storage.getCredentials();
        }
    }

    store = async (username, password,token) => {
       
        switch(this.storage.constructor.name ){
            case "KeychainHelper": 
                return this.storage.storeCredentials(username,password,token);
            case "LocalStorageHelper" :
                return this.storage.storeCredentials(username,password,token);
        }
    }

    print(){
        switch(this.storage.constructor.name ){
            case "KeychainHelper": 
                return this.storage.printCredentials;
            case "LocalStorageHelper" :
                return this.storage.store;
        }
    }


}