import React from 'react';
import {
    loginRequest,
    AlertHelper,
    error,
    LoginAppRequestModal
} from '../../helpers/commonHelper';

import { connect } from 'react-redux';
import {styles} from './login.css'
import { withTranslation } from 'react-i18next';
import { compose } from 'lodash/fp';
import {
    Button,
    Card, 
    Form,
    Row,
    Col,
} from '../../helpers/uiHelper';

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
            setToTrue: true,
            toNext:false,
          
        }
        this.onLogin = this.onLogin.bind(this);
        this.test = this.test.bind(this);
    }

     async componentDidUpdate(){

        if (this.state.processing && this.props.login && this.props.login.token){
                this.setState({processing:false});
               this.toHome();
               
            }
            if(this.state.processing && this.props.error){
                this.setState({processing:false});
                console.log(this.props.errorMessage);
                this.alertHelper.handler(error, 'Username or Password is incorrect');
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
            this.setState({usernameErrorMessage:this.t('PleaseCheckUsernameLabel') })
            this.setState({passwordErrorMessage:this.t('PleaseCheckPasswordLabel') })
            return false
        }
        else if(username===''){
            this.setState({usernameErrorMessage:this.t('PleaseCheckUsernameLabel') })
            this.setState({usernameEntered: true })
            return false
        }
        else if(password===''){
            this.setState({passwordErrorMessage:this.t('PleaseCheckPasswordLabel') })
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
       return  this.props.history.push('/home')
    }

    onLogin=()=>{
        const isValid =this.validate(this.state.modal.username, this.state.modal.password)
        if(isValid===true){
        this.setState({processing:true})
         this.props.loginRequest(this.state.modal);
           } 
        } 

    test = () => {
        if(this.state.usernameErrorMessage != null){
            return styles.errorContainerStyle;
        }
        return null;
    }

    render(){
        const { t } = this.props;
        return(
            <div className="outerContainer">
                <Card style={{ width: '800' }}>
                    <div className="innerContainer">
                        <div>{this.state.username}</div>
                        <Form>
                            <Form.Group controlId="username">
                                <Form.Control type="text"
                                    placeholder={t('Username')}
                                    required
                                    onChange={(event) => { this.setState({ modal: { ...this.state.modal, username: event.target.value } }) }} />
                            </Form.Group>

                            <Form.Group controlId="password">
                                <Form.Control type="password"
                                    placeholder={t('Password')}
                                    onChange={(event) => { this.setState({ modal: { ...this.state.modal, password: event.target.value } }) }} />
                            </Form.Group>

                            <div className="buttonWrapper">
                                <Button className="buttonSubmit" variant="primary" type="button"
                                    onClick={this.onLogin}>
                                    {t('Login')}
                                </Button>
                            </div>

                            <div className="optionsWrapper">
                                <Row>
                                    <Col>

                                        <Form.Check type="checkbox" label={t('RememberMeLabel')} />

                                    </Col>

                                    <Col>
                                        <Card.Link href="#">{t('ForgotPasswordLabel')}</Card.Link>


                                    </Col>
                                </Row>
                            </div>
                        </Form>
                    </div>
                </Card>
            </div> 
        )}
};



 const mapStateToProps = (state /*, ownProps*/) => {
    return {
        login: state.auth? state.auth.login: null,
        error: state.auth? state.auth.error: false,
        errorMessage: state.auth? state.auth.errorMessage:'',
        loading: state.auth? state.auth.loading:null,
        isAuthenticated:state.auth? state.auth.isAuthenticated:null
    }
  }

const mapDispatchToProps = { loginRequest }

export default compose(
    withTranslation(),
    connect(mapStateToProps, mapDispatchToProps)
  )(Login);


