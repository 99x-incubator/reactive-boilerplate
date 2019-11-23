import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import {
  AlertHelper,
    success,
} from '../../helpers/commonHelper';
import { connect } from 'react-redux';


class Home extends React.Component {

    constructor(props){
        super(props);
          this.alertHelper = AlertHelper.getInstance();
    }

    componentDidMount(){
        this.alertHelper.handler(success,'Successfully logged in')
    }

    render(){
        return(
            <View style={styles.container}> 
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>
                        Welcome to Reactive Boilerplate
                    </Text>
                </View>
                
           </View>
       
        )
    }
  
};

const styles = StyleSheet.create({
container: {
    flex:1,
    justifyContent:'center',
    alignContent:'center',
    
},
titleContainer: {
    alignSelf:'center',
    paddingBottom:10,
},
titleText: {
    fontSize:20
}
});

const mapStateToProps = (state) => {
    return {
        loading: state.auth? state.auth.loading:null,
    }
  }

export default connect(
  mapStateToProps
)(Home)




