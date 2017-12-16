import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from "react-router";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import registerServiceWorker from './registerServiceWorker';

import routes from "./routes";

ReactDOM.render(
    <MuiThemeProvider>
        <Router history={browserHistory}>
            {routes}
        </Router>
    </MuiThemeProvider>
    , document.getElementById('root'));
registerServiceWorker();
