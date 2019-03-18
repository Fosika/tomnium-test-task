import React, {Component} from 'react';
import './AllProducts.css';
import {connect} from 'react-redux';
import {fetchAllProducts} from '../../redux/modules/allproducts';
import {Link} from 'react-router-dom';


class AllProducts extends Component {
    componentDidMount() {
        this.props.fetchAllProducts();
    }

    render() {
        return (

            <div className='products-wrapper'>
                <div className="link-products">
                    <Link to={'/'}>Main</Link>
                    <Link to={'/product/new'}>New Product</Link>
                </div>
                {this.props.products && this.props.products.map(item =>

                    <Link className='link-all' to={`product/${item._id}`} key={item._id}>
                        <div className="list-product">
                            <div className='product-item'>

                                <h1>{item.name}</h1>
                                <span>Price: {item.price}</span>
                                <p>Description: {item.description}</p>
                                <h3>Created By: {item.createdBy}</h3>
                            </div>
                        </div>
                    </Link>

                )}

            </div>
        );
    }

}
const mapStateToProps = store => {
    return {
        products: store.products.products


    }
};

export default connect(mapStateToProps, {fetchAllProducts})(AllProducts);