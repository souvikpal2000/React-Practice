import React from 'react';
import {Switch, Route, useLocation} from 'react-router-dom';

import Menu from './Components/Menu';
import Home from './Components/Home';
import User from './Components/User';
import Contact from './Components/Contact';
import About from './Components/About';
import Error from './Components/Error';

const App = () => {
    const location = useLocation();
    //console.log(location.pathname);
    return(
        <React.Fragment>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/user/:fname/:lname" component={User} exact/>
                <Route path="/contact" component={Contact} exact/>
                <Route path="/about" component={About} exact/>
                <Route component={Error} />
            </Switch>
            {location.pathname === '/user/secret/v1'? <h4 className="secret">You got me !!!</h4> : null}
            <Menu />
        </React.Fragment>
    )
}

export default App;