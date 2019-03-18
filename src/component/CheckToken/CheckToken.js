import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {login_Success} from '../../redux/modules/login';

class CheckToken extends Component {
    componentWillMount() {
       if(localStorage.getItem('auth')){
           const data = localStorage.getItem('auth');
           this.props.login_Success({data})
       }
    }
    render() {
        return (
            <div>
                {this.props.isAuth ?
                    <div>
                        {this.props.children}
                    </div>:
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: {from: this.props.location},
                        }}
                    />
                }

            </div>
        );
    }
}
const mapStateToProps = store => {
    return {
        isAuth: store.login.isAuth,
    }
};
export default connect(mapStateToProps, {login_Success})(CheckToken);