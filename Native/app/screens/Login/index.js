import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { Button, ThemeProvider, CheckBox, Input } from '../../helpers/uiElements';
import {    
    loginRequest,
    AlertHelper,
    error,
    LoginAppRequestModal
} from '../../helpers/commonHelper';
import I18n from '../../i18n';
import { connect } from 'react-redux';
import {Routes} from '../../../app/router';
import { CustomActivityIndicator } from '../../../app/components';

class Login extends React.Component {

    constructor(props){
        super(props);
        this.alertHelper = AlertHelper.getInstance();

        this.state = {
            checked:false,
            processing:false,
            modal: new LoginAppRequestModal(),
            isValid:false,
            usernameErrorMessage:null,
            passwordErrorMessage:null,
            loading:false,
            password:''
          
        }
        this.onLogin = this.onLogin.bind(this);
    }

    async componentDidUpdate(){

        if (this.state.processing && this.props.login && this.props.login.token){
                this.setState({processing:false});
                this.toHome();
            }
            if(this.state.processing && this.props.error){
                this.setState({processing:false});
                console.log(this.props.errorMessage);
                this.alertHelper.handler(error, 'Username or Password is incorrect')

            }
    }

    validate=(username, password)=>{
        if(username!==''){
            this.setState({usernameErrorMessage:'' })
           
        }
        if(password!==''){
            this.setState({passwordErrorMessage: '' })
           
        }

        if(username===''&& password==='' ){
            this.setState({usernameErrorMessage: I18n.t('PleaseCheckUsernameLabel') })
            this.setState({passwordErrorMessage: I18n.t('PleaseCheckPasswordLabel') })
            return false
        }
        else if(username===''){
            this.setState({usernameErrorMessage: I18n.t('PleaseCheckUsernameLabel') })
            this.setState({usernameEntered: true })
            return false
        }
        else if(password===''){
            this.setState({passwordErrorMessage: I18n.t('PleaseCheckPasswordLabel') })
            this.setState({usernameEntered: true })
            return false
        }
        else{
            this.setState({usernameErrorMessage:null});
            this.setState({passwordErrorMessage:null});
            return true
        }
    }

    toHome=()=>{
        const {navigation} = this.props;
        navigation.navigate(Routes.App);
    } 

    onLogin=()=>{
        const isValid =this.validate(this.state.modal.username, this.state.modal.password)
       
        if(isValid===true){
            this.setState({processing:true});
          
          this.props.loginRequest(this.state.modal);
        } 
    }

    render(){
        return(
            <View style={styles.container}> 
            <CustomActivityIndicator loading={this.props.loading}/>
                <View style={styles.titleContainer}>
                    <Text >
                        Welcome 
                    </Text>
                </View>
                

                <View style={styles.textInputContainer}>
                    <View style={styles.textInput}>
                        
                        <Input
                            placeholder={I18n.t('Username')}
                            onChangeText={(username) => {this.setState({modal:{...this.state.modal,username:username}})}}
                            inputContainerStyle={this.state.usernameErrorMessage ? styles.errorContainerStyle:null}
                            errorStyle={{ color: '#FF0000' }}
                            errorMessage={this.state.usernameErrorMessage}
                            />
                          
                    </View>
                    <View style={styles.textInput}> 
                        <Input
                            placeholder={I18n.t('Password')}
                            secureTextEntry={true}
                            onChangeText={(password) => {this.setState({modal:{...this.state.modal,password:password}})}}
                            inputContainerStyle={this.state.passwordErrorMessage ? styles.errorContainerStyle:null}
                            errorStyle={{ color: '#FF0000' }}
                            errorMessage={this.state.passwordErrorMessage} 
                        
                            
                        />
                    </View>
                </View>

                <View style={styles.buttonContainer}>
                    <ThemeProvider>
                    <Button 
                    title ={I18n.t('Login')}
                    onPress={this.onLogin}
                    />
                    </ThemeProvider>
                    
                </View> 

                <View style={styles.optionsContainer}>

                    <View style={styles.optionRememberMe}>
                        <CheckBox
                        title={I18n.t('RememberMeLabel')}
                        checked={this.state.checked}
                        onPress={this.onLogin}
                        />
                    </View>

                    <View style={styles.optionForgotPassword}>
                        <Text>{I18n.t('ForgotPasswordLabel')}</Text>
                    </View>  
                </View>
           </View>   
        )}
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
    paddingBottom:10
},
textInputContainer:{
    paddingBottom:20
},
textInput:{
    marginBottom:10
},

buttonContainer:{
    paddingHorizontal: 10,
    marginBottom:10
},
optionsContainer:{
    flexDirection:'row',
    justifyContent:'space-around'
}, 

optionRememberMe:{
    flex:1,
    paddingLeft:15,
},
optionForgotPassword:{
    flex:1,
    paddingLeft:15,
    paddingTop:20,
},
errorContainerStyle:{
    borderBottomColor: '#FF0000'
}
});

const mapStateToProps = (state) => {
    return {
        login: state.auth? state.auth.login: null,
        error: state.auth? state.auth.error: false,
        errorMessage: state.auth? state.auth.errorMessage:'',
        loading: state.auth? state.auth.loading:null,
    }
  }

const mapDispatchToProps = { loginRequest }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)


