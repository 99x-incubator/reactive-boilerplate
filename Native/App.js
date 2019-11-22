
import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import { Store} from './app/helpers/commonHelper';
import { CustomDropdownAlert } from './app/components';
import { Provider } from 'react-redux';
import AppContainer from './app/router';
import StorybookUI from './storybook';
import config from './app/helpers/configHelper';

export default class Home extends React.Component {
  render(){
    if (config.isStorybook !== 'true') {
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


