import React from "react";
import { Switch, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Search from "./Components/Search";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";

const App = () => {
    return(
        <>
            <Navbar />
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/search" component={Search} exact/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
                <Route component={Error}/>
            </Switch>
            <Footer />
        </>
    )
}

export default App;