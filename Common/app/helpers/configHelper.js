 class Config{

    static config = null;

    static getConfig(){
       
        if (Config.config === null){
            throw 'config is not set';
        }
        return Config.config
    }
    static setConfig(appconfig){
      
        Config.config= {
            env: appconfig.env,
            baseUrl: appconfig.baseUrl
        }
    }
}

var getConfig = Config.getConfig;
var setConfig = Config.setConfig;

export {getConfig, setConfig};