import React, { PureComponent } from 'react';
import {View, ActivityIndicator, StyleSheet, Modal}  from 'react-native';

export default class CustomActivityIndicator extends PureComponent{

    render(){
        if(this.props.loading){
            return (
                <View style={styles.loading}>
                    <ActivityIndicator
                        size='large'
                    />    
                </View>
            )
        }else{
            return null;
        }
    }
}

const styles = StyleSheet.create({
    loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
      }
});


