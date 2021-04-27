import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import logo from '../logo.png'
import { Home, Papers, Committee } from '../components'

const Layout = (props) => (
    <div>
        <Router>
            <div>
                <Link to="/Home"><img src={logo} alt="logo" height="75px" width="75px" align="left"/></Link>
                <br/>
                <nav align="right">
                    <Link to="/Committee">Committee</Link> |&nbsp;
                    <Link to="/Papers">Papers</Link>&nbsp;
                </nav>

                <Switch>
                    <Route path="/Committee">
                        <Committee />
                    </Route>
                    <Route path="/Papers">
                        <Papers />
                    </Route>
                    <Route path="/Home">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
        {props.children}
        <footer>
            <div>
                Copyrights &copy; International Coding Conference.
                All rights reserved. 
                <br/>
                &nbsp;
            </div>
        </footer>
    </div>
);

export { Layout };