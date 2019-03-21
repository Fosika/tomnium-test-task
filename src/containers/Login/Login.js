import React, {Component} from 'react';
import './login.css';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {UsersLogin} from '../../redux/modules/login'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
    }
    handleInputChange = (key, e) => {
        this.setState({
            [key]: e.target.value
        })
    };

    handleClick = (e) => {
        e.preventDefault();
        const {
            username,
            password
        } = this.state;
        this.props.UsersLogin({username, password})
        this.setState({username:'',password:''})
    };


    render() {
        return (
            <div className="login-wrapper">
                {!this.props.isAuth ?
                    <div className='input-wrapper'>
                        <form>
                            <div>
                                <h1>Login</h1>
                                {this.props.err &&
                                <div>{this.props.err}</div>
                                }
                                <input
                                    type="text"
                                    onChange={(e)=>this.handleInputChange('username', e)}
                                    placeholder='Your name'
                                />
                            </div>
                            <div>

                                <input
                                    type="password"
                                    onChange={(e)=>this.handleInputChange('password', e)}
                                    placeholder='Your password'
                                />
                            </div>
                            <button type='submit' className='submit' onClick={this.handleClick}>Sign In</button>
                            <Link to={'/product/new'}>New Product</Link>
                            <Link to={'/products'}>Products</Link>
                        </form>
                    </div> :
                    <Redirect
                        to={{
                            pathname: '/product/new',
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
        err: store.login.err,
    }
};
export default connect(mapStateToProps, {UsersLogin})(Login);