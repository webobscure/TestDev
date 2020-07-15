import React from 'react'
import {Navbar} from './Nav'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// redux
//import {Provider} from 'react-redux'
//import store from '../redux/store'


//components


//redux
//import AuthRoute from '../util/AuthRoute'

//pages
import Main from '../pages/Main'
//import Control from '../pages/Control'
import {Giraffes} from '../pages/Giraffes'
//import Workers from '../pages/Workers'
//import Settings from '../pages/Settings'
//import Support from '../pages/Support'

export const Header = () => {
        return (
                    <Router>
                        <Navbar/>
                        <Switch>
                            <Route exact path="/" component={Giraffes}/>
                        </Switch>
                    </Router>
        )
}
