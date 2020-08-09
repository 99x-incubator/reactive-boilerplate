import React  from 'react';
import { AlertHelper } from '../../helpers/commonHelper';
import {success} from '../../helpers/commonHelper';
import {Card} from '../../helpers/uiHelper';

export default class Home extends React.Component {

    constructor(props){
        super(props);
        this.alertHelper = AlertHelper.getInstance();
    }
    componentDidMount(){
        this.alertHelper.handler(success,'Successfully logged in')
    }

    render(){
     
        return (
            <div>
                <Card style={{ width: '800' }}>
                <p>Welcome</p>
                </Card>
            </div>
        )
    }
}