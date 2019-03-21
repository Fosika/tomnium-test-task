import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker';
import store from './redux/create';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import App from './component/PrivateRoute/PrivateRoute';


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <App />

            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
);



serviceWorker.unregister();
