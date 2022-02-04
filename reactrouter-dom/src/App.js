import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Menu from './Components/Menu';
import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';
import Error from './Components/Error';

const App = () => {
    return(
        <React.Fragment>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/contact" component={Contact} exact/>
                <Route path="/about" component={About} exact/>
                <Route component={Error} />
            </Switch>
            <Menu />
        </React.Fragment>
    )
}

export default App;