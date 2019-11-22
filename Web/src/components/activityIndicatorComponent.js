import React, { Component } from 'react';
import { Spinner } from 'react-activity';
import 'react-activity/dist/react-activity.css';
import { connect } from 'react-redux';

 
export class ActivityIndicatorComponent extends Component {

  constructor(props){
    super(props);
  }

  render() {
      return (
        <div style={{display: 'flex', justifyContent: 'center',  alignItems: 'center'}}>
        <Spinner color="#727981" speed={1} animating={this.props.loading}  size={32} />
        </div>
    )
  }
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
      loading: state.auth? state.auth.loading:null,
  }
}

export default connect(mapStateToProps)(ActivityIndicatorComponent);

