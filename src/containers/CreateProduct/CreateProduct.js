import React, {Component} from 'react';
import {connect} from 'react-redux';
import {postCreateProduct} from "../../redux/modules/createProduct";
import {Link} from 'react-router-dom';
import './CreateProduct.css';


class CreateProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            price: '',
            description: '',
            createdBy: '',
    };
    }

    handleInputChange = (key, e) => {
        this.setState({
            [key]: e.target.value
        })
    };

    handleClick = (e) => {
        e.preventDefault();
        this.props.postCreateProduct({...this.state});
        this.setState({
            name: '', price: '', description: '', createdBy: ''
        })
    };

    render() {
        return (
            <div className='create-wrapper'>

                    <form className='create-form'>
                        <div className='create-product-wrapper'>
                            <h1 className='headline'>Create product</h1>
                            <input
                                type="text"
                                onChange={(e)=>this.handleInputChange('name', e)}
                                value={this.state.name}
                                placeholder='Name'/>
                            <input
                                type="text"
                                onChange={(e)=>this.handleInputChange('price', e)}
                                value={this.state.price}
                                placeholder='Price'/>
                            <input
                                type="text"
                                onChange={(e)=>this.handleInputChange('description', e)}
                                value={this.state.description}
                                placeholder='Description'/>
                            <input
                                type="text"
                                onChange={(e)=>this.handleInputChange('createdBy', e)}
                                value={this.state.createdBy}
                                placeholder='Created By'/>
                            <button className='submit' onClick={this.handleClick}>Create</button>

                            <Link to={'/products'}>Products</Link>
                        </div>
                    </form>

            </div>
        );
    }
}

const mapStateToProps = store => {
    return {
        isAuth: store.registration.isAuth,
    }
};

export default connect(mapStateToProps, {postCreateProduct})(CreateProduct)