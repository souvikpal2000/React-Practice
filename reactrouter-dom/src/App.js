import React from 'react';
import {Switch, Route, useLocation, useHistory} from 'react-router-dom';

import Menu from './Components/Menu';
import User from './Components/User';
import Error from './Components/Error';
import Page from './Components/Page';

const App = () => {
    const location = useLocation();
    const history = useHistory();
    console.log(location.pathname);
    console.log(history);
    return(
        <React.Fragment>
            <Switch>
                <Route exact path="/" render={() => <Page name='Home' />} />
                <Route exact path="/user/:fname/:lname" component={User} />
                <Route exact path="/contact" render={() => <Page name='Contact' />} />
                <Route exact path="/about" render={() => <Page name='About' /> } />
                <Route component={Error} />
            </Switch>
            {location.pathname === '/user/secret/v1'? 
                <div className="secretContainer">
                    <h4 className="secret">You got me !!!</h4>
                    <button onClick={() => history.goBack()}>Go Back</button>
                </div> : null
            }
            <Menu />
        </React.Fragment>
    )
}

export default App;