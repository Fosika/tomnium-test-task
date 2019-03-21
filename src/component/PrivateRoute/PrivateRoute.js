import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { PrivateRoute } from "../../component/CheckToken/CheckToken";
import Login from "../../containers/Login/Login";
import Registration from "../../containers/Registration/Registration";
import ProductById from "../../containers/ProductById/ProductById";
import CreateProduct from "../../containers/CreateProduct/CreateProduct";
import AllProducts from "../../containers/AllProducts/AllProducts";
import Main from "../Main/Main";



export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = { value: "" };
    }

    render() {
        return (
            <Switch>
                <Route exact path='/' component={Main}/>
                <PrivateRoute exact path='/product/new' component={CreateProduct}/>
                <Route exact path='/product/:id' component={ProductById}/>
                <Route exact path='/registration' component={Registration}/>
                <Route exact path='/products' component={AllProducts}/>
                <Route exact path="/login" component={Login}/>
                <Route />
            </Switch>
        )
    }

}