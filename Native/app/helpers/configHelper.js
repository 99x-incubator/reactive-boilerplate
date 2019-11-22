import Config from "react-native-config";
const config = {
    env:Config.ENV,
    baseUrl:Config.BASEURL,
    isStorybook: Config.IS_STORYBOOK
};
export default config;