
import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import { Store} from './app/helpers/commonHelper';
import { CustomActivityIndicator, CustomDropdownAlert } from './app/components';
import { Provider } from 'react-redux';
import AppContainer from './app/router';
import Config from "react-native-config";
import StorybookUI from './storybook';
import dotenvParseVariables from 'dotenv-parse-variables';

const ENV = dotenvParseVariables({ IS_STORYBOOK: Config.IS_STORYBOOK });
export default class Home extends React.Component {
  render(){
    if (!ENV.IS_STORYBOOK) {
    return (
      <Provider store={Store}>
        <View style={styles.container}>
          <CustomDropdownAlert/> 
          <AppContainer/>
        </View>
      </Provider>
  )} else {
      return <StorybookUI />
  }
  };
 
};

const styles = StyleSheet.create({
  container: {
    flex:1 
  }
});


