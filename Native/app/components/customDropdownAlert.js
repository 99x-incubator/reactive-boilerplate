import  DropdownAlert  from 'react-native-dropdownalert';
import React, { PureComponent } from 'react';
import { View } from 'react-native';
import  { AlertHelper }  from '../helpers/commonHelper';
import { success, warn, info, error } from '../helpers/commonHelper';


export default class CustomDropdownAlert extends PureComponent {

    constructor(props){
        super(props)
        this.alertHelper = AlertHelper.getInstance();
        this.eventEmitter = this.alertHelper.getEmitter();
    }

    componentDidMount() {
        this.eventEmitter.on('alert',(args)=>this.typeOfAlert(args.type,args.message))
    }

      typeOfAlert =  (type, message) => {
        switch(type){
            case success:
                this.dropDownAlertRef.alertWithType(success, '', message);
            case error:
                this.dropDownAlertRef.alertWithType(error, 'Error', message);
            case info:
                this.dropDownAlertRef.alertWithType(info, 'Info', message);
            case warn:
                this.dropDownAlertRef.alertWithType(warn, 'Warn', message);
        } 
      };

    render() {

        return (
            <View>
            <DropdownAlert
                ref={ref => this.dropDownAlertRef = ref}
                closeInterval={200} />
            </View>
      )
    }

}


