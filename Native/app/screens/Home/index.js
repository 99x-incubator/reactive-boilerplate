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


 export default class Home extends React.Component {

    constructor(props){
        super(props);
          this.alertHelper = AlertHelper.getInstance();
    }

    componentDidMount(){
        this.alertHelper.handler(success,'Successfully logged in')
    }

    render(){
        return(
        <View>
            <View style={styles.container}> 
                <View style={styles.titleContainer}>
                    <Text >
                        Welcome
                    </Text>
                </View>
                
           </View>
           </View>
       
        )
    }
  
};

const styles = StyleSheet.create({
container:{
    flex:1,
    justifyContent:'center',
    alignContent:'space-around',
    paddingHorizontal: '5%'
    
},
titleContainer:{
    alignSelf:'center',
    paddingBottom:10,
}
});




