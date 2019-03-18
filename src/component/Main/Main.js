import React, { Component } from 'react';
import './main.css';
import {Link} from 'react-router-dom';


class Main extends Component {

    render() {
        return (
            <div className="wrapper">
                <div className='auth-wrapper'>
                    <div className='sign'>
                        <Link to={'/registration'}>Sign Up</Link>
                    </div>
                    <div className='sign'>
                        <Link to={'/login'}>Sign in</Link>
                    </div>
                </div>
                <div className='products'>
                    <Link to={'/products'}>All Products</Link>
                </div>



            </div>
        );
    }
}

export default Main;