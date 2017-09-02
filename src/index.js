import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom';

import Home from './screens/Home/index.js';
import History from './screens/History/index.js';

const Router = () =>
    <BrowserRouter>
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/history">History</Link>
                </li>
            </ul>

            <Route exact path="/" component={Home}/>
            <Route path="/history" component={History}/>
        </div>
    </BrowserRouter>;

render(<Router/>, document.getElementById("root"));