
import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import { Store} from './app/helpers/commonHelper';
import { ActivityIndicatorComponent, DropdownAlertComponent } from './app/components';
import { Provider } from 'react-redux';
import AppContainer from './app/router';
export default class Home extends React.Component {
  render(){
    return (
      <Provider store={Store}>
        <View style={styles.container}>
          <ActivityIndicatorComponent/>
          <DropdownAlertComponent/> 
          <AppContainer/>
        </View>
      </Provider>
  )};
 
};

const styles = StyleSheet.create({
  container: {
    flex:1 
  }
});


