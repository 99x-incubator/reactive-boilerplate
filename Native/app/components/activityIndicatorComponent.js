import React, { PureComponent } from 'react';
import {View, ActivityIndicator, StyleSheet, Modal}  from 'react-native';
import { connect } from 'react-redux';

class ActivityIndicatorComponent extends PureComponent{

    render(){
        return(
            <Modal 
            visible={this.props.loading} 
            transparent={true}
           >
                <View style={styles.loading}>
                    <ActivityIndicator
                        size='large'
                    />    
                </View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    loading: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

const mapStateToProps = (state) => {
    return {
        loading: state.auth? state.auth.loading:null,
    }
  }


export default connect(
  mapStateToProps,
)(ActivityIndicatorComponent);

