import React from 'react';
import './site.css'
import { Route, Switch } from 'react-router-dom';

import Nav from './components/nav';
import Comments from './components/comments'
import Event from './components/event'
import Home from './components/home';
import About from './components/about';

class App extends React.Component {

    render() {
        return (
            <main>
                <Nav />
                <Switch>
                    <Route path="/comments" component={Comments} />
                    <Route path="/events" component={Event} />
                    <Route path="/about" component={About} />
                    <Route path="/home" component={Home} />
                </Switch>
            </main>
        )
    }
}

export default App;