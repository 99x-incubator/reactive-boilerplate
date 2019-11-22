import { createSwitchNavigator, createAppContainer } from 'react-navigation'

import { createStackNavigator } from 'react-navigation-stack'

import Home from './screens/Home'
import Login from './screens/Login'

const appStack = createStackNavigator(
    {
        Home: Home
    },
    {
        initialRouteName: 'Home',
        
    },
);

const authStack = createStackNavigator(
    {
        Login: Login,
    },
    {
        initialRouteName: 'Login',
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
    },
   
);

const mainSwitch = createSwitchNavigator(
    {
        App: appStack,
        Auth:authStack,
    },
    {
        initialRouteName: 'Auth'
    },
    
);

export const Routes = { 
         App:'Home'
 };
    

const AppContainer = createAppContainer(mainSwitch);

export default AppContainer; 
